
const nav = document.querySelector('.nav')
const menuBar = nav.querySelector('#menu-bar')
const link = nav.querySelector(' .nav-link')
const icon = document.querySelector('#icon')




menuBar.addEventListener("click",(e)=>{
    link.classList.toggle("nav-open")
    const ic = e.target.classList.contains("fa-bars")
   if(ic) {
    e.target.classList.remove("fa-bars")
    e.target.classList.add("fa-times")
   } else{
       e.target.classList.remove("fa-times")
    e.target.classList.add("fa-bars")
   }
    })