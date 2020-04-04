/*function printTime() {
    let date=new Date();
    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    document.body.innerHTML=hour+":"+min+":"+sec;

}
setInterval(printTime,1000);*/


//додати годинник без перезапису стр????

/*
let elem=document.getElementsByClassName("menu");
elem.innerHTML="HELLO WORLD";
for(let x=0;x<elem.length;x++){
    elem[x].innerHTML="Hi";
    
}
*/
/*
var rek=document.getElementById("p1");
var arr=rek.childNodes;
for(var x=0;x<arr.length;x++){
    arr[x].innerHTML="New text";
}*/
/*
var a = document.getElementById("demo");
     var arr = a.childNodes;
     for(var x=0;x<arr.length;x++) {
       arr[x].innerHTML = "new text";
     }*/


    

     document.body.style.background = 'black'; // сделать фон красным

setTimeout(() => document.body.style.background = '', 1000); // вернуть назад

let t = setInterval(move,10);
let pos=0;
let box=document.getElementById("box");

function move() {
    pos+=1;
    box.style.left=pos+"px";
    
}
function move() {
    if(pos >= 150) {
      clearInterval(t);
    }
    else {
      pos += 1;
      box.style.left = pos+"px";
    }
  }


  function show() {
    alert("Заполните пожалуйста форму!");
  }
    var x = document.getElementsByClassName("btnflip");
    x.onclick = function () {
    document.body.innerHTML = Date();
}

element.addEventListener("click", myFunction);
element.addEventListener("mouseover", myFunction);

function myFunction() {
  alert("Hello World!");
}