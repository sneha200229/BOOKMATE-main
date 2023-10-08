// s3Service.js

const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'AKIAQJH6ZIU244LYPLG6',
  secretAccessKey: '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',
});

const s3 = new AWS.S3();

module.exports = s3;
