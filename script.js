let colors = ["#AE1438", "#192A56", "#badc57", "#019031", "#2B2B52"];
let body = document.querySelector("body");
let btn = document.querySelector(".btn");

function change() {
  let random = parseInt(Math.random() * colors.length);
 
  body.style.backgroundColor = colors[random];

}
