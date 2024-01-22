#!/usr/bin/node

const fs = require('fs');
// get file path from cmd line args
const filePath = process.argv[2];
fs.readFile(filePath, 'utf8', (error, content) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(content);
});
