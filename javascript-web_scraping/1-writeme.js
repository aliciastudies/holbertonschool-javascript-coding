#!/usr/bin/node

const fs = require('fs');
// get file path from cmd line args
const filePath = process.argv[2];
const content = process.argv[3];
fs.writeFile(
  filePath,
  content,
  {
    encoding: 'utf8',
    flag: 'w',
    mode: 0o666,
  },
  (error) => {
    if (error) {
      console.error(error);
      return;
    }
  },
);
