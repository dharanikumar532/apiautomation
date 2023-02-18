function logo()
{
var ele=document.getElementById("name");
var ct=ele.getContext("2d");
ct.fillStyle="red";
ct.fillText("dharani");
}
window.addEventListner("load",logo,false);

