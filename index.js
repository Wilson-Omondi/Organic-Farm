//SERVER

const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const dataObj = JSON.parse(data);

const server = http.createServer((req, res) =>{
  const pathName = req.url;

  if(pathName === '/' || pathName === '/overview'){
    res.end('This is the OVERVIEW')
  } else if(pathName === '/product'){
    res.end('This is the Product')
  } else if(pathName === '/api'){
    
    res.writeHead(200, {'content-type': 'applicaton/json'});
    res.end(data);

  } else {
    res.writeHead(404, {
      'content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found</h1>')
  }
});

server.listen(8000, '127.0.0.1', ()=>{
  console.log('Listening to request on port 8000')
})



















