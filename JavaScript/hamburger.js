

let sideNavBar= document.querySelector('.Side_navbar');
let menuBtn = document.querySelector('.menu-Btn');
let menuOpen = false;



menuBtn.onclick = function(){

sideNavBar.style.right== "-55%";

if (sideNavBar.style.right == "-55%" ){
    sideNavBar.style.right = "0"
    menuOpen = false;



         }else{

            sideNavBar.style.right ="-55%"
            menuOpen= true;

           } 


if (!menuOpen){

    menuBtn.classList.add('open');
    menuOpen= true;

}else{
    menuBtn.classList.remove('open');
    menuOpen= false;
}

        

}



