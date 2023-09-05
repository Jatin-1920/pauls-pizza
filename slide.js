var slide = document.querySelectorAll('.slider-parent')

slide.forEach(slides)
function slides(img) {
  var slider = document.querySelectorAll(`#${img.id} .img-slider .slide`)

  var time =2500;
 var index = 0; 
  slider[index].classList.add("active")
  setInterval(()=>{
    slider[index].classList.remove("active")
    index++
    if(index===slider.length)  index =0;
    slider[index].classList.add("active")
  },time)
}


