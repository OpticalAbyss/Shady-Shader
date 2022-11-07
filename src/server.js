const http = require(`http`);
const fs = require(`fs`);
const path = require(`path`);
const port = 8000;

const home = fs.readFileSync(path.join(__dirname, `../public/home.html`), "utf-8");

const server = http.createServer((req, res)=>{
  if(req.url == `/`)
  {
    res.writeHead(200, {'Content-Type' : `text/html`})
    fs.readFile(path.join(__dirname, `../public/css/style.css`), "utf-8", (err,data)=>{
      fs.readFile(path.join(__dirname, `../public/index.js`), "utf-8", (err, data1)=>{  
        res.write(home + `<style>${data}</style>` + `<script>${data1}</script>`
          + `</body></html>`)
        res.end()
      })
    })
  }// Deccided to make a single page
  else {
    res.end(`404 Page not Found`)
  }

});

server.listen(port, (err)=>{
  if(err) console.log(err);
  console.log(`Listening on port ${port}`)
});