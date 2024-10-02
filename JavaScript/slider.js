
let firstIndex = 0;

function automaticSlide(){
    setTimeout(automaticSlide, 2000);
    
    let pics;


    let slideimg = document.querySelectorAll('.slider-imgs img');

    for(pics = 0; pics < slideimg.length; pics ++){
        slideimg[pics].style.display= "none";
    }
    firstIndex++

    if(firstIndex > slideimg.length){
        firstIndex = 1;
    }

    slideimg[firstIndex -1].style.display= "block";

}
automaticSlide();