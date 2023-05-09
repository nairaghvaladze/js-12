document.body.style.backgroundColor="Darkseagreen";
document.body.style.fontWeight="500";
function shemowmeba() {
    var a=document.getElementById("number").value;
      var str="Hello World! ";
      if (a<0 || a==0){
        document.getElementById("text").innerHTML="შეიტანეთ დადებითი რიცხვი!";
        document.getElementById("text").style.color="red";
      }
      else if(a>0){
    const repString = str.repeat(a);
   document.getElementById("text").innerHTML=repString;
   document.getElementById("text").style.color="black";
   document.getElementById("myform").reset();
}
}
