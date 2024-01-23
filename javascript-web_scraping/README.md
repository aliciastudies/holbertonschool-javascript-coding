# Learning Objectives

### Why JavaScript programming is amazing

- can be used for both front-end and back-end, so it's versatile for building full-stack apps.

- supported by all major web browsers.

- allows developers to write non-blocking code, which is needed for building responsive and efficient web applications.

- has a large ecosystem of libraries and frameworks that simplify and accelerate development.

- relatively easy to learn for beginners due to its simple syntax and widespread resources for learning.

### How to manipulate JSON data

Use built-in `JSON` object.

```
const jsonData = '{"name": "Dora", "age": 5, "Animal": "Cat"}';

// Parsing JSON string to JavaScript object
const parsedData = JSON.parse(jsonData);

// Modifying the data
parsedData.age = 6;

// Converting JavaScript object back to JSON string
const modifiedJsonData = JSON.stringify(parsedData);

console.log(modifiedJsonData);
```

### How to use `request` and `fetch` API

#### Using `request` (Node.js)

```
const request = require('request');
const filePath = process.argv[2];

request(filePath, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  console.log(`code: ${response.statusCode}`);
});
```

#### Using `fetch` (Browser)

The `fetch` API is built into modern browsers and is used for making HTTP requests.

```
const url = 'https://example.com/api/data';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch failed:', error));
```

### How to read and write a file using `fs` module

#### Reading a file:

```
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
```

#### Writing to a file:

```
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
    mode: 0o666
  },
  (error) => {
    if (error) {
      console.error(error);
    }
  }
);
```
