const btn = document.querySelectorAll('.btns')
const img = document.querySelectorAll('.tab-img')
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click",filterImg)
}



function btnactivate(e) {
    btn.forEach(btns=>{
       btns.classList.remove("btnactive")
    })
    e.currentTarget.classList.add("btnactive")
}




function filterImg(e) {
    btnactivate(e)
img.forEach(img=>{
img.classList.add("expandimg")
const imgType = img.dataset.type;
const btnType = e.currentTarget.dataset.type
if(imgType!==btnType) {
img.classList.remove("expandimg")
} else{
    img.classList.add("expandimg")
}
})
}
