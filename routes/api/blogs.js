const express = require('express');
const formidable = require('formidable');
const fs = require('fs');

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

router.get('/', (req, res) => {
    Blog.find()
        .sort({ date: -1 })
        .then((blogs) => res.json(blogs))
        .catch((err) => res.status(404).json({ noBlogsFound: 'No blogs found', err }));
});

router.get('/:blogType', (req, res) => {
    const paramBlogType = req.params.blogType;

    Blog.find({ blogType: paramBlogType })
        .sort({ date: -1 })
        .then((blogs) => res.json(blogs))
        .catch((err) => res.status(404).json({ noBlogsFound: 'No blogs found', err }))
});

router.post('/blog', async (req, res) => {
    let body;

    const form = new formidable.IncomingForm();

    await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if(err) {
                console.log(err.message)
                reject(err);
            }
            let data = {...fields, ...files}

            body = data;
            resolve();
        })
    })

    const { errors, isValid } = validateBlogInput(body);

    if (!isValid) {
        return res.status(400).json(errors)
    }

    // This function exists because we need to first check in the uploadblog function
    // If the user attached a file to the post request. That way we can know whether
    // or not we can send the file to AWS, or if we can just write the new data object in 
    // mogno and say the location url field to null. 
    const createBlog = (data, body) => {
        let Location;
        if (!data) {
            Location = undefined;
        } else {
            Location = data.Location
        }
        // const { Location } = data;

        const newBlog = new Blog({
            title: body.title,
            owner: body.ownerId,
            description: body.description,
            quote: body.quote,
            authorQuote: body.authorQuote,
            blogType: body.blogType,
            locationURL: Location,
        });

        newBlog.save()
            .then((blog) => {
                console.log('Successfully saved the new blog post.')
                res.json(blog)
            })
            .catch(err => {
                console.log(err)
                res.json(err)
            })
    };

    // On a successful response check if there is anything to upload
    const uploadAwsImage = async (file) => {

        let s3bucket = new AWS.S3({
            accessKeyId: IAM_USER_KEY,
            secretAccessKey: IAM_USER_SECRET,
            Bucket: BUCKET_NAME
        });

        let params;

        // This is allowing us to define whether or not we have a file in our params
        // If there is no file we want to make it undefined so we dont chat with
        // AWS s3

        if (file) {
            await new Promise((resolve, reject) => {
                fs.readFile(file.path, (err, data) => {
                    console.log('reading file...')
                    if (err) {
                        reject(err);
                    }
                    params = {
                        Bucket: BUCKET_NAME,
                        Key: file.name,
                        Body: data
                    };
                    resolve()
                })
            })
            .catch(err => console.log(err))
        } else {
            params = undefined;
        }

        if (params === undefined) {
            createBlog(undefined, body);
        } else {
            // Callback to return the locationUrl from AWS
            console.log('Uploading to AWS S3...')
            s3bucket.upload(params, (err, data) => {
                if (err) {
                    console.log('error in callback');
                    console.log(err);
                }
                console.log('Successfully uploaded image to S3');
                //If Successful create a new blog post in mongoDB;
                createBlog(data, body);
            });
        }
    };

    uploadAwsImage(body.imageFile);
});

module.exports = router;