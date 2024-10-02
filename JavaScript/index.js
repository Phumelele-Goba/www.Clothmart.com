


// SIDENABAR SECTION JS--------------------------------
let HamBtn = document.querySelector('#menu-Btn');
let SideNavBar = document.querySelector('#side_navbar');
let menuOpen = false;

HamBtn.onclick = function(){

    SideNavBar.style.right == "-55%";

    if(SideNavBar.style.right== "-55%"){
        SideNavBar.style.right= "0";
        menuOpen = false;
      
    }else{

        SideNavBar.style.right= "-55%";
        menuOpen = true;
    

    }

   if(!menuOpen){
    HamBtn.classList.add('open');
    menuOpen = true;
   }
   else{
         HamBtn.classList.remove('open');
         menuOpen= false;
   }
 
}
// SIDENABAR SECTION JS--------------------------------





 function Enquiry(){

    let TextArea= document.querySelector("#text-area");


    if( TextArea.value == ""){
           alert("Input is Empty, Error!")
    }
    else{

        swal({
            title: "Success!",
            text: "Enquiry Sent.",
            timer: 90000
          });

    }

 

 
  



    }




//  function Subscription(){

    // let inputsibscription= document.querySelector("#subscription")

    // if(inputsibscription.value == " "){

        // swal({
        //     title: "Success!",
        //     text: " Subscription successfully.",
        //     timer: 90000
        // });

        // }else if(inputsibscription.value == ""){
      
        //     swal({
        //         title: "Error!",
        //         text: "Input Empty, Please enter Your email",
        //         html: false,
        //       });
        
  


    // }
       





    




/*---------------SUBSCRIPTION SECTION START------------------------------------*/ 

function Subscription(){

let subscribeinput= document.querySelector("#subscription");


if( subscribeinput.value == ""){

    alert("Input Is empty!");
    

}else{
       swal({
            title: "Success!",
            text: " Subscription successfully.",
            timer: 90000
        });
}



}
/*---------------SUBSCRIPTION SECTION END------------------------------------*/ 