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
    return `Number of students: ${
      studentsCS.length + studentsSWE.length
    }\nNumber of students in CS: ${studentsCS.length}. List: ${studentsCS.join(
      ', ',
    )}\nNumber of students in SWE: ${
      studentsSWE.length
    }. List: ${studentsSWE.join(', ')}`;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const port = 1245;

const app = http.createServer(async (request, response) => {
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else if (request.url === '/students') {
    try {
      const databaseName = await countStudents(process.argv[2]);
      response.write(`This is the list of our students\n${databaseName}`);
      response.end();
    } catch (error) {
      response.write(`This is the list of our students\n${error.message}`);
      response.end();
    }
  }
});

app.listen(port);

module.exports = app;
