const fs = require('fs');

function countStudents(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const studentLines = fileContent.split('\n').slice(1);

    const studentsCS = [];
    const studentsSWE = [];

    for (const line of studentLines) {
      const [firstname, lastname, age, field] = line.split(',');

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

module.exports = countStudents;
