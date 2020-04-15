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
     }


    

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
*/

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
/*
var images = [
    "images/slider1.jpg", 
    "images/slider2.jpg", 
    "images/slider3.jpg",
    "images/slider4.jpg",
    "images/slider5.jpg"

 ];

 var num = 0;

 function next() {
   var slider = document.getElementById("slider");
   num++;
   if(num >= images.length) {
     num = 0;
   }
   slider.src = images[num];
   }
 
 function prev() {
   var slider = document.getElementById("slider");
   num--;
   if(num < 0) {
     num = images.length-1;
   }
   slider.src = images[num];
 }*/

 function validate() {
  var n1 = document.getElementById("num1");
  var n2 = document.getElementById("num2");
  if(n1.value != "" && n2.value != "") {
    if(n1.value == n2.value) {
      return true;
    }
  }
  alert("Повторите ещё раз!");
  return false;
}

function test(a, b = 3, c = 42) {
  return a + b + c;
}
console.log(test(5)); //50