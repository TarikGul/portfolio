import React from 'react';

const parseDate = date => {
    //Quick fix
    if(!date) return ' '; 

    const split = date.split('T');
    return split[0];
}

const BlogItem = props => {
    const { title, description, date, authorQuote, quote, locationURL } = props;

    console.log(locationURL)
    return (
        <div className='blog-item-container'>
            <div className='blog-title'>
                {title}
            </div>
            {/* <img src={locationURL} height='150' width='200' alt=""/> */}
                {
                    quote ?
                    (
                        <div className='quote-container'>
                            <div className='quote'>
                                {`"${quote}"`}
                            </div>
                            <div className='authorQuote-container'>
                                {`-${authorQuote}`}
                            </div>
                        </div>
                    ) : (
                        null
                    )
                }
            <div className='blog-date'>
                {parseDate(date)}
            </div>
            <p className='blog-description'>
                {description}
            </p>  
        </div>
    )
};

export default BlogItem; 

// "Statement": [
//     {
//         "Sid": "Stmt1488493308547",
//         "Effect": "Allow",
//         "Principal": {
//             "AWS": "arn:aws:iam::963978108579:user/portfolio-master"
//         },
//         "Action": [
//             "s3:ListBucket",
//             "s3:ListBucketVersions",
//             "s3:GetBucketLocation",
//             "s3:Get*",
//             "s3:Put*"
//         ],
//         "Resource": "arn:aws:s3:::tarik-portfolio-dev"
//     }
// ]

// "Statement": [
//     {
//         "Sid": "PublicRead",
//         "Effect": "Allow",
//         "Principal": "*",
//         "Action": ["s3:GetObject", "s3:GetObjectVersion"],
//         "Resource": ["arn:aws:s3:::awsexamplebucket1/*"]
//     }
// ]

// {
//     "Version": "2012-10-17",
//         "Statement": [
//             {
//                 "Sid": "Stmt1420751757000",
//                 "Effect": "Allow",
//                 "Principal": {
//                     "AWS": "arn:aws:iam::963978108579:user/bimeo-master"
//                 },
//                 "Action": "s3:*",
//                 "Resource": [
//                     "arn:aws:s3:::bimeo-dev",
//                     "arn:aws:s3:::bimeo-dev/*"
//                 ]
//             }
//         ]
// }