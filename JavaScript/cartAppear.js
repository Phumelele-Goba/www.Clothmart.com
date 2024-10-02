

let cartAppear = document.querySelector('.cart-section-appear');
let cartIcon = document.querySelector('.cart_wrapper');
let closeCart = document.querySelector('.closeNav');
let cartOpen = false;

cartIcon.onclick = function(){

    cartAppear.style.right== "-70%";
    
    if (cartAppear.style.right == "-70%" ){
        cartAppear.style.right = "0%"
        cartOpen = false;

        closeNav.style.display= "flex";
       hamburgerhide.style.display= "none";
    
    
    
             }else{
                cartAppear.style.right ="-70%"
                cartOpen= true;

                hamburgerhide.style.display= "block";
                closeNav.style.display= "none";
    
               } 
            }


closeNav.addEventListener('click', ()=>{
    sideNav.style.display= "none"
})

