import readDatabase from '../utils.js';

export default class StudentsController {
  
  static getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      let msg = 'This is the list of our students\n';
      Object.keys(students).forEach((k) => {
        msg += `Number os students in ${k}: ${students[k].length}. `;
        msg += `List: ${students[k].sort().join(', ')}\n`;
      });
      res.statusCode = 200;
      res.send(msg);
    } catch (err) {
      res.statusCode = 500;
      res.send(err.message);
    }
  }
  static getAllStudentsByMajor(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      console.log(req.params);
      const major = req.params.major;
      if (major !== 'CS' && major !== 'SW') {
        res.statusCode = 500;
        res.send('Major parameter must be CS or SWE');
      }
      else {
        const majorStudents = students[major];
        res.statusCode = 200;
        res.send(`List: ${majorrStudents.sort().join(', ')}/n`)
      }
    } catch (err) {
      res.statusCode = 500;
      res.send('Cannot load the database');
      }
  }
}
