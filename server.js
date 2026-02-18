const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 5500;
const root = process.cwd();
const server = http.createServer((req, res) => {
  try {
    let url = req.url || '/';
    let clean = url.split('?')[0];
    let p = path.join(root, decodeURI(clean));
    fs.stat(p, (err, st) => {
      if (err) { res.writeHead(404); res.end('Not found'); return; }
      if (st.isDirectory()) { p = path.join(p, 'index.html'); fs.stat(p, (e,s)=>{ if(e){ res.writeHead(403); res.end('Forbidden'); return;} fs.createReadStream(p).pipe(res); }); return; }
      fs.createReadStream(p).pipe(res);
    });
  } catch(e){
    res.writeHead(500); res.end('Server error');
  }
});
server.listen(port, ()=> console.log('Server running on http://localhost:'+port));
