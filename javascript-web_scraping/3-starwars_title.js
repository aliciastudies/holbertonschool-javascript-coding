#!/usr/bin/node

const request = require('request');
const episode = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${episode}`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  try {
    const movieData = JSON.parse(body);
    console.log(movieData.title);
  } catch (parseError) {
    console.log(`Error parsing JSON: ${parseError}`);
  }

});
