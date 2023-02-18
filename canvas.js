function logo()
{

var ele=document.getElementById("java");
var ct=ele.getContext("2d");
ct.font="20pt Algerian";
ct.strokeStyle="green";

ct.strokeText("Dharani kumar",100,50);
}
window.addEventListener("load",logo,false);