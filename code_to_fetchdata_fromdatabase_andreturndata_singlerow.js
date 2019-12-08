var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",//by default host name is localhost
    user:"root",//bydefault it is root
    database:"mydb"//database name
})
con.connect(function(err){
    if(err) throw err;
    console.log("connected")
    con.query("select * from emp",(err,rows)=>{
        console.log(rows[0]);// for single rows data
        
       //console.log(rows);// for all rows data
    })
});