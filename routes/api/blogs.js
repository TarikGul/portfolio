const express = require('express');

//AWS SDK
const AWS = require('aws-sdk');

// Keys for prod and dev
const keys = require('../../config/keys');
const awsBucket = require('../../config/bucket');

const BUCKET_NAME = awsBucket.bucket;
const IAM_USER_KEY = keys.awsAccessKey;
const IAM_USER_SECRET = keys.awsSecretAccessKey;

// Blog validations and schema
const validateBlogInput = require('../../validation/blog');
const Blog = require('../../models/Blog');

const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: 'This is a test route' }));

router.post('/blog', (req, res) => {
    const { errors, isValid } = validateBlogInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors)
    };
    // If the response correct then we will store this function to be called
    const uploadToS3 = (file) => {
        let s3bucket = new AWS.S3({
            accessKeyId: IAM_USER_KEY,
            secretAccessKey: IAM_USER_SECRET,
            Bucket: BUCKET_NAME
        });
        let params = {
            Bucket: BUCKET_NAME,
            Key: file.name,
            Body: file.data
        };
        // Callback to return the locationUrl from AWS
        s3bucket.upload(params, function (err, data) {
            if (err) {
                console.log('error in callback');
                console.log(err);
            }
            console.log('success');

            //If Successful create a new blog post in mongoDB;
            const { body } = req;

            const newBlog = new Blog({
                title: body.title,
                owner: body.ownerId,
                description: body.description,
                locationUrl: data.locationURL,
            });

            newBlog.save()
                .then((visitor) => res.json(visitor))
                .catch(err => res.json(err))
        });
    }

    uploadToS3(req.body.file);
});

module.exports = router;