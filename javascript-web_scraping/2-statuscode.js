#!/usr/bin/node

const request = require('request');
const filePath = {
    method: 'GET',
    url: process.argv[2]
};

request(filePath, function (error, response, body) {
    if (error) {
        console.error(error);
    }
  console.log(`code: ${response.statusCode}`);
});

