var string="hello";
var strlen="";
 strlen=string.length;
var even="";
var odd="";
for(var i=1;i<strlen;i++)
 {
    if(i%2==0)
    {
        even=even+string.charAt(i);

       
    }
    else{
        odd=odd+string.charAt(i);
        //or odd+=string.charAt(i);

    }
}
console.log("You have enter string\n"+string);
console.log("odd character\n"+odd);
console.log("even character\n"+even);