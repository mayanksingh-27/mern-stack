const express = require('express')
const path=require('path')
const app = express()
const port = 3000

//as a static folder this is served
app.use(express.static(path.join(__dirname,"public")))
app.get('/',(req,res)=>
{
  res.send("hello worls");
});
app.get('/hell/:name',(req,res)=>
{
  res.send("hello"+ req.params.name)
})
app.get('/ok', (req, res) => {
  res.json(
    {
      id:1,
      name:"mayank",
    });
});

app.get('/about', (req, res) => {
res.sendFile(path.join(__dirname,'new.html')) 
 })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:3000`)
})