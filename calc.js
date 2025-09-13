let input=document.querySelector(".input")
let button=document.querySelectorAll(".btn");
let root=document.querySelector(".root").innerText;


button.forEach((i)=>{
    i.addEventListener('click',print)
})

function print(e){
    let value=e.target.innerText;
    if(value==="OFF") off()
    if(value==="ON") on()
    if(parseInt(value) || value==="0" || value==="00" || value==='.') number(value)
    if(value==="/" || value==="*" || value==="-" || value==='+') result(value)
    if(value==="=")  Computation()
    if(value==="DEL") backspace()
    if (value==="AC") clear()
    if(value==="^") number()
    if(value==="Sq")  Squre()
    if(value===root) Squreroot()
}
let num=''
function number(value){
    if(value===undefined){
        value='^'
    }
    num=num+value
    input.innerText=num
}

function result(value){
    if(num.length>0){
    num=num+value
    input.innerText=num
    }
    else{
        alert("enter the number")
    }
}

function  Computation(){
    if(num.length===0){
        alert("give the number and operation")
        return
    }
    if(num.includes('^')){
        let a=num.split("^");
        input.innerText=Math.pow(eval(a[0]),eval(a[1]))
        return
    }
    input.innerText=eval(num)
    num=input.innerText
}
function power(){
  let sp=num.split('^');
  console.log(sp)
}
function Squre(){
     if(num.length>0){
    num=num+'**2'
    Computation()
    }
     else{
        alert("enter the number")
     }
}
function Squreroot(){
    if(num.length>0){
    num=num+'**0.5'
    Computation()
    }
    else{
        alert("enter the number")
    }
}


function clear(){
    num=''
    input.innerText=''
}

function backspace(){
    num=num.slice(0,-1)
    input.innerText=num
}

function off(){
    button.forEach((i)=>{
        i.disabled=true;
        i.classList.remove("hover")
        if(i.innerText==="ON"){
            i.classList.add("hover")
            i.disabled=false
        }
    })
}
function on(){
    button.forEach((i)=>{
        i.disabled=false;
        i.classList.add("hover")
    })
}
