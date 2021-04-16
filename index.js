//console.log("array hello");

const express = require('express')
const app = express()

let port = 4000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

let students = [];
app.get('/testroute', (req, res) => {
   console.log(req.query.name);
   let n =req.query.name;
   students.push(n);

  res.send(` hello ${students} how r u`);
})


app.listen(port, () => {

  console.log("server is running on port 4000");
})