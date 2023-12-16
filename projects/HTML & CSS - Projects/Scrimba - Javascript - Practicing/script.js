let countEl = document.getElementById("count");

let count = 0; 
function increment() { 
      count += 1;
      countEl.innerText= count;
}
 
let saveEl= document.getElementById("save-el");
function save() {
     let countStr = count + " - ";
     saveEl.innerText += countStr;
     countEl.innerText= "0";
     count = 0;
}
 
 