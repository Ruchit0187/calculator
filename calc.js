let input = document.querySelector(".input");
let button = document.querySelectorAll(".btn");
let special = document.querySelector(".special");
let root = document.querySelector(".root").innerText;
let s1 = document.querySelectorAll(".s1");
let zero = document.querySelectorAll(".zero")
button.forEach((i) => {
  i.addEventListener("click", print);
});
function print(e) {
  let value = e.target.innerText;
  e.target.style.backgroundColor="#d4a6a6";
  setTimeout(()=>{e.target.style.background='white'},100)
  if (value === "OFF") off();
  if (value === "ON") on();
  if (parseInt(value) || value === "0" || value === "00" || value === ".")
    number(value);
  if (value === "/" || value === "*" || value === "-" || value === "+" || value === "^")
    result(value);
  if (value === "=") Computation(e.target);
  if (value === "DEL") backspace();
  if (value === "AC") clear();
  // if (value === "^") number(value);
  if (value === "Sq") Squre();
  if (value === root) Squreroot();
  if (value === "+/-") plusorminus();
  if (value === "MU") textcalculator();
  if (value === "MC") memoryclear();
  if (value === "MR") memoryshow();
  if (value === "M+") memoryadd();
  if (value === "M-") memorysubstraction();
}
let num = "";
input.innerText = "0";
let evulatemethod = true;
function number(value) {
  input.innerText='0'
  if (evulatemethod){
    num = ''
    input.innerText = ""
    evulatemethod = false
  }
  if (value === ".") {
    special.disabled = true;
    zero.disabled=false
  }
  s1.forEach((i) => {
    i.disabled = false;
  });
  num = num + value;
  if (num[0] === '0') {
    zero.forEach((i) => i.disabled = true);
  }
  if (num[1] != '0') {
    zero.forEach((i) => i.disabled = false);
  }
  input.innerText = num;
}

function result(value) {
  if (
    num.length > 0 ||
    num.includes("+") ||
    num.includes("-") ||
    num.includes("*") ||
    num.includes("/") ||
    num.includes("^")
  ) {
    special.disabled = false;
    evulatemethod=false;
     let numlength=num.length;
  if (/[\+\-\*\/]$/.test(num[numlength-1])){
      let a=num.slice(0,numlength-1)
      num=a+value;
      input.innerText=num;
      return
  }
    s1.forEach((i) => {
      i.disabled = false;
    });
    zero.forEach((i) => i.disabled = false);
    num = num + value;
    input.innerText = num;
  } else {
    alert("enter the number");
  }
}

// function check(value){
//   let numlength=num.length;
//   if (/[\+\-\*\/]$/.test(num[numlength-1])){
    
//   }
// }
function Computation() {
  if (num.length === 0) {
    alert("give the number and operation");
    return;
  }
  try {
    if (num.includes("^")) {
      let a = num.split("^");
      input.innerText = Math.pow(eval(a[0]), eval(a[1]));
      num = input.innerText.toString();
      evulatemethod=true
      return;
    }
    evulatemethod=true
    input.innerText = eval(num);
    num = input.innerText;
  }
  catch (e) {
    input.innerText = "error";
    num = ''
  }
}
function Squre() {
  if (num.length > 0) {
    input.innerText = Math.pow(parseFloat(num), 2);
    num = input.innerText.toString();
    evulatemethod=true
  } else {
    alert("enter the number");
  }
}
function Squreroot() {
  if (num.length > 0) {
    num = num + "**0.5";
    try {
      evulatemethod=true
      input.innerText = eval(num);
      num = input.innerText;
    } catch (e) {
      input.innerText = "undefined";
      num = "";
    }
  } else {
    alert("enter the number");
  }
}
function plusorminus() {
  let st = input.innerText;
  evulatemethod=false
  if (st[0] === "-") {
    st = "" + st;
    input.innerText = st.slice(1);
    num = input.innerText;
  } else {
    st = "-" + st;
    input.innerText = st;
    num = input.innerText;
  }
}
function textcalculator() {
  let a = 10;
  if (num.length > 0 && num[0] !== "-" && num) {
    let number = parseFloat(num);
    number = number + number / a;
    input.innerText = number;
    num = number.toString();
  } else {
    input.innerText = "undefined";
  }
}
// for clear or  backspace
function backspace() {
  num = num.slice(0, -1);
  input.innerText = num;
   if(num.length===0){
    input.innerText='0'
    num='0'
    return
  }
  evulatemethod=false
}
function clear() {
  num = "";
  input.innerText = "0";
  special.disabled = false;
  s1.forEach((i) => {
    i.disabled = false;
  });
}
// memory function
function memoryclear() {
  try {
    localStorage.setItem("value", 0);
    setTimeout(() => { }, 1000)
  } catch (e) {
    alert(e);
  }
}
function memoryshow(){
  try{
  let number = localStorage.getItem("value");
  input.innerText = number;
  }
  catch(e){
    console.log(e)
  }
}
function memoryadd() {
  let number = localStorage.getItem("value");
  let number2 = parseFloat(number) + parseFloat(num);
  localStorage.setItem("value", number2);
}
function memorysubstraction() {
  let number = localStorage.getItem("value");
  let number2 = parseFloat(number) - parseFloat(num);
  localStorage.setItem("value", number2);
}


// off-on function 
function off() {
  button.forEach((i) => {
    i.disabled = true;
    i.classList.remove("hover");
    clear()
    input.innerHTML=""
    num=''
    if (i.innerText === "ON") {
      i.classList.add("hover");
      i.disabled = false;
    }
  });
}
function on() {
  input.innerHTML='0'
  button.forEach((i) => {
    i.disabled = false;
    i.classList.add("hover");
  });
}