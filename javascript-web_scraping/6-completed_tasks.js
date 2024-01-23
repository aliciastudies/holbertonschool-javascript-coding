#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const users = JSON.parse(body);
  const completed = {};
  for (const task of users) {
    if (task.completed === true) {
      completed[task.userId] = (completed[task.userId] || 0) + 1;
    }
  }
  console.log(completed);
});
