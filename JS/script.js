const circle = document.querySelector('.circle')
const section = document.querySelector('.try-section')


document.onmousemove = e => {
    const x =e.pageX 
    const  y = e.pageY 
    circle.animate({
        left:`${x}px`,
        top:`${y}px`
    },{duration:1000,fill:"forwards"})
}

section.addEventListener("mousemove",(e)=>{
    section.classList.add("dataclr")
    circle.classList.add("circles")
    circle.classList.remove("circle")

})
section.addEventListener("mouseleave",(e)=>{
    section.classList.remove("dataclr")
    circle.classList.remove("circles")
    circle.classList.add("circle")
})




