#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const character = '18';

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  try {
    const movieData = JSON.parse(body).results;
    let count = 0;
    for (const movie of movieData) {
      for (const char of movie.characters) {
        if (char.includes(`${character}`)) {
          count = count + 1;
        }
      }
    }
    console.log(count);
  } catch (parseError) {
    console.log(`Error parsing JSON: ${parseError}`);
  }
});
