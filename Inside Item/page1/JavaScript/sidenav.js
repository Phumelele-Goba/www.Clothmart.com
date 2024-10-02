

let sideNav = document.querySelector('.sideNavBar');
let menu = document.querySelector('#menu-Btn');
let closeNav = document.querySelector('.closeNav');
let hamburgerhide = document.querySelector('.Hamburger');
let menuOpen = false;

menu.onclick = function(){

    sideNav.style.left== "-55%";
    
    if (sideNav.style.left == "-55%" ){
        sideNav.style.left = "0"
        menuOpen = false;


        closeNav.style.display= "flex";
       hamburgerhide.style.display= "none";
    
    
    
             }else{
                sideNav.style.left ="-55%"
                menuOpen= true;

                hamburgerhide.style.display= "block";
                closeNav.style.display= "none";
    
               } 
            }




    let userIcon = document.querySelector('.fa-user');
    let close = document.querySelector('.close');
    let backgroundModal = document.querySelector('.bg-modal');


    userIcon.addEventListener('click', ()=>{
        backgroundModal.style.display = "flex";
    })

    close.addEventListener('click', ()=>{
        backgroundModal.style.display = "none";
    })




