const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  const { url } = req;
  let message = 'This is the list of our students\n';
  switch (url) {
    case '/':
      res.statusCode = 200;
      res.end('Hello Holberton School!');
      break;
    case '/students':
      try {
        message += await countStudents(process.argv[2]);
        res.end(message);
        break;
      } catch {
        res.end(err.message);
        break;
      }
    default:
      break;
  }
});

app.listen(1245);

module.exports = app;
