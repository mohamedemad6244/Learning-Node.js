import IncomingForm from 'formidable';
import http from 'http';

const server = http.createServer(function (req, res) {
  if (req.url === '/fileupload' && req.method === 'POST') {
    const form = new IncomingForm();
    form.parse(req, function (err, fields, files) {
      if (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        const oldPath = files.fileuploaded.path;
        const newPath = './' + files.fileuploaded.name;
        fs.rename(oldPath, newPath, function (err) {
          if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File uploaded successfully!');
          }
        });
      }
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="fileuploaded"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
  }
});

server.listen(800, function () {
  console.log('Server listening on port 800');
});
