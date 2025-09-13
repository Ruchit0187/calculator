let input=document.querySelector(".input")
let button=document.querySelectorAll(".btn");
button.forEach((i)=>{
    i.addEventListener('click',print)
})

function print(e){
    let value=e.target.innerText
    if(value==="OFF") off()
    if(value==="ON") on()
    if(parseInt(value) || value==="0" || value==="00" || value==='.') number(value)
    if(value==="/" || value==="*" || value==="-" || value==='+') result(value)
    if(value==="=") computation()
    if(value==="DEL") backspace()
    if (value==="AC") clear()
}

let num=''
function number(value){
    num=num+value
    input.innerText=num
}

function result(value){
    num=num+value
    input.innerText=num
}

function computation(){
    input.innerText=eval(num)
    num=''
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
