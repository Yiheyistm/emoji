
function btn(){
var randomNum=Math.floor( Math.random()*14)+1;
var randomImg="images/img1 (" + randomNum + ").jpg";
document.querySelectorAll("img")[0].setAttribute("src",randomImg);


if(randomNum>=2 && randomNum<=3)
{
    document.querySelector("h1").innerHTML="Confuse";
    document.querySelector("h1").style.color="blue";
    
}
else if(randomNum>=4 && randomNum<=6)
{
    document.querySelector("h1").innerHTML="Surprise"; 
    document.querySelector("h1").style.color="rgb(27, 246, 246)";
}
else if(randomNum>=7 && randomNum<=8)
{
    document.querySelector("h1").innerHTML="Normal";
}
else if(randomNum>=9 && randomNum<=12)
{
    document.querySelector("h1").innerHTML="Sad";
    document.querySelector("h1").style.color="black";
}
else{
    document.querySelector("h1").innerHTML="Happy";
    document.querySelector("h1").style.color="red";
}

}

function bnt2(){
    var values=document.getElementById("emoji").value;
    
 function common(n){
     randomNum=Math.floor( Math.random()*n)+n;
    randomImg="images/img1 (" + randomNum + ").jpg";
     document.querySelectorAll("img")[0].setAttribute("src",randomImg);
    
     return randomImg;
 }
 if(values=="Confuse" || values=="confuse"){
    common(2);
    document.querySelector("h1").innerHTML="Confuse";
    document.querySelector("h1").style.color="blue";
    console.log(randomImg); }
 else{alert("Not Found");}
}