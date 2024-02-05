const http = require('http');
const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const studentLines = fileContent.split('\n').slice(1);

    const studentsCS = [];
    const studentsSWE = [];

    for (const line of studentLines) {
      const [firstname, , , field] = line.split(',');

      if (field === 'CS') {
        studentsCS.push(firstname);
      }

      if (field === 'SWE') {
        studentsSWE.push(firstname);
      }
    }
    console.log(
      `Number of students: ${studentsCS.length + studentsSWE.length}`,
    );
    console.log(
      `Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(
        ', ',
      )}`,
    );
    console.log(
      `Number of students in SWE: ${
        studentsSWE.length
      }. List: ${studentsSWE.join(', ')}`,
    );
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const port = 1245;

const app = http
  .createServer(async (request, response) => {
    if (request.url === '/') {
      response.end('Hello Holberton School!');
    } else if (request.url === '/students') {
      try {
        const databaseName = await countStudents(process.argv[2]);
        response.write(`This is the list of our students\n ${databaseName}`);
        response.end();
      } catch (error) {
        response.write(`This is the list of our students\n ${error.message}`);
        response.end();
      }
    }
  })
  .listen(port);

module.exports = app;