const express = require("express");
const app = express(); 

app.get('/', (req,res) => {
  const query = req.query.data;
  res.json({ status: 200, message: query });
})

app.post('/', (req,res) => {
  res.json({ status: 200, message:"hi this is server"});
})

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('server on port 3000');
})

module.exports = app;