/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/

//snippet-sourcedescription:[sqs_longpolling_existingqueue.js demonstrates how to change the amount of time an Amazon SQS queue waits for a message to arrive.]
//snippet-service:[sqs]
//snippet-keyword:[JavaScript]
//snippet-keyword:[Code Sample]
//snippet-keyword:[Amazon Simple Queue Service]
//snippet-sourcetype:[full-example]
//snippet-sourcedate:[2018-06-02]
//snippet-sourceauthor:[AWS-JSDG]

// ABOUT THIS NODE.JS SAMPLE: This sample is part of the SDK for JavaScript Developer Guide topic at
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sqs-examples-enable-long-polling.html

// snippet-start:[sqs.JavaScript.longPoll.setQueueAttributes]
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'REGION'});

// Create the SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

var params = {
 Attributes: {
  "ReceiveMessageWaitTimeSeconds": "20",
 },
 QueueUrl: "SQS_QUEUE_URL"
};

sqs.setQueueAttributes(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
// snippet-end:[sqs.JavaScript.longPoll.setQueueAttributes]
