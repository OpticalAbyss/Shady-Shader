const http = require(`http`);
const fs = require(`fs`);
const path = require(`path`);
const port = 8000;

const about = fs.readFileSync(path.join(__dirname, `../public/about.html`), "utf-8");
const home = fs.readFileSync(path.join(__dirname, `../public/home.html`), "utf-8");
const contact = fs.readFileSync(path.join(__dirname, `../public/contact.html`), "utf-8");

const server = http.createServer((req, res)=>{
  if(req.url == `/`)
  {
    res.writeHead(200, {'Content-Type' : `text/html`})
    fs.readFile(path.join(__dirname, `../public/css/style.css`), "utf-8", (err,data)=>{
      res.write(home + `<style>${data}</style>`)
      res.end()
    })
  }
  else if(req.url == `/about`)
  {
    res.writeHead(200, {'Content-Type' : `text/html`})
    fs.readFile(path.join(__dirname, `../public/css/style.css`), "utf-8", (err,data)=>{
      res.write(about + `<style>${data}</style>`)
      res.end()
    })
  }
  else if(req.url == `/contact`)
  {
    res.writeHead(200, {'Content-Type' : `text/html`})
    fs.readFile(path.join(__dirname, `../public/css/style.css`), "utf-8", (err,data)=>{
      res.write(contact + `<style>${data}</style>`)
      res.end()
    })
  }
  else {
    res.end(`404 Page not Found`)
  }

});



server.listen(port, (err)=>{
  if(err) console.log(err);
  console.log(`Listening on port ${port}`)
});