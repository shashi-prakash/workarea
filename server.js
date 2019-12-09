var express = require('express');
var app = express();

app.get('/branch/noida', function(req, res){
  // res.send("Hello world!");
   res.json({
       Location:"1",
       college:"abc",
       course_available:"MBA B.TECH DEPLOMA BCA",
       status:"Available",
       Aplicable:"Boys and girls"

   });
})
app.get('/branch/delhi', function(req, res){
    // res.send("Hello world!");
     res.json({
         Location:"2",
         college:"xyz",
         course_available:"MBA B.TECH DEPLOMA BCA",
         status:"Available",
         Aplicable:"Boys and girls"
  
     });
  })
  app.get('/branch/kanpur', function(req, res){
    // res.send("Hello world!");
     res.json({
         Location:"3",
         college:"pqr",
         course_available:"MBA B.TECH DEPLOMA BCA",
         status:"Available",
         Aplicable:"Boys and girls"
  
     });
  })
app.post('/user', function (req, res) {
    res.send('Got a POST request')
  })

  //put method used
  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })
  //delete method used
  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  });
  console.log('server is running at port 3001');
app.listen(3001,);
