const fs = require('fs').promises;

function findNumberOfStudents(file) {
  const row = file.split('\n');
  const students = [];
  for (let i = 1; i < row.length; i += 1) {
    if (row[i] !== '') {
      students.push(row[i]);
    }
  }
  return students;
}

function groupStudentsPerField(students) {
  const fields = {};
  let name; let about;
  students.forEach((student) => {
    [name, ...about] = student.split(',');
    const field = about[about.length - 1];
    if (!(field in fields)) {
      fields[field] = [];
    }
    fields[field].push(name);
  });
  return fields;
}

async function countStudents(path) {
  try {
    const file = await fs.readFile(path, { encoding: 'utf-8' });
    const students = findNumberOfStudents(file);
    const fields = groupStudentsPerField(students);
    return new Promise((resolve) => {
      let log = `Number of students: ${students.length}`;
      Object.keys(fields).forEach((key) => {
        log += `\nNumber of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;
      });
      console.log(log);
      resolve(log);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
