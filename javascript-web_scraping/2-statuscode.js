#!/usr/bin/node

const request = require('request');
const filePath = process.argv[2];
request(filePath, function (error, response, body) {
  console.log('code:', response.statusCode);
});