var button1=document.querySelector("#button1");
var avion1=document.querySelector("#avion");
var testp=document.querySelector("#test-p");

button1.addEventListener("mouseover",function(){
    //testp.style.color="orange";
    testp.style.background="rgb(172, 151, 58)";
    testp.style.border="4px solid rgba(22, 144, 104)";
    testp.style.transform="scale(1.15)";
    avion1.style.transform="rotate(180deg)";
    avion.style.opacity="0.9";
});
button1.addEventListener("mouseout",function(){
    testp.style.background="rgba(0,0,0,0)";
    testp.style.border="1px solid rgba(0,0,0,0)";
    testp.style.transform="scale(1)";
    avion1.style.transform="rotate(0deg)";
    avion.style.opacity="0.1";
});