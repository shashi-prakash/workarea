var name="hello";
 var nlen=name.length;
 var revrs="";
 for(var i=nlen-1;i>=0;i--)
 {
     revrs=revrs+name.charAt(i);

 }
 console.log("before reverse a string\n"+ name); 
console.log("After reverse\n"+ revrs); 
document.write(revrs);
alert(revrs);
