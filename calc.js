let input=document.querySelector(".input")
let button=document.querySelectorAll(".btn");
button.forEach((i)=>{
    i.addEventListener('click',print)
})

function print(e){
    let value=e.target.innerText
    if(value==="OFF") off()
    if(value==="ON") on()
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
