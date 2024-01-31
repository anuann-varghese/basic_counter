const p=document.getElementById("zero")

const plus=document.getElementById("plus")
plus.classList.add("btn")
const minus=document.getElementById("minus")
minus.classList.add("btn")
const reset=document.getElementById("reset")
reset.classList.add("btn")


plus.addEventListener("click",function(){
    p.textContent=Number(p.textContent)+1
})
minus.addEventListener("click",function(){
    p.textContent=p.textContent-1
})
reset.addEventListener("click",function(){
    p.textContent="0"
})