



    //  INSIDE THE  CART SECTION JS START--------------------------------------------
    let CartButtons = document.querySelectorAll(".add-2-cart");
    let Cart = document.querySelector("#CART");


    let products =[

        {
         name: "Zara Tshirt",
         tag: "zaratshirt",
         price: 180,
         inCart: 0
        },

        {
         name: "NASA Tshirt",
         tag: "nasatshirt",
         price: 400,
         inCart: 0
        },

        {
         name: "Blue Jeans",
         tag: "bluejeans",
         price: 400,
         inCart: 0
        },

        {
         name: "Jordan Tshirt",
         tag: "jordantshirt",
         price: 700,
         inCart: 0
        },

        {
         name: "Raw tshirt",
         tag: "rawtshirt",
         price: 600,
         inCart: 0
        },

        {
         name: "Tropica shorts",
         tag: "tropicashorts",
         price: 150,
         inCart: 0
        },

        {
         name: "Striped Tshirt",
         tag: "stripedtshirt",
         price: 180,
         inCart: 0
        },

        {
         name: "Lakers Tshirt",
         tag: "lakerstshirt",
         price: 300,
         inCart: 0
        },

        {
         name: "Khaki Shorts",
         tag: "khakishorts",
         price: 150,
         inCart: 0
        },

        {
         name: "Poplin Skirt",
         tag: "poplinskirt",
         price: 450,
         inCart: 0
        },

        {
         name: "Men Old Khakhi",
         tag: "menoldkhakhi",
         price: 600,
         inCart: 0
        },

        {
         name: "Women Denim",
         tag: "womendenim",
         price: 400,
         inCart: 0
        },

        {
         name: "Leather Skirt",
         tag: "leatherskirt",
         price: 500,
         inCart: 0
        },

        {
         name: "Nike Navy",
         tag: "nikenavy",
         price: 650,
         inCart: 0
        },

        {
         name: "2pac Tshirt",
         tag: "2pactshirt",
         price: 250,
         inCart: 0
        },

        {
         name: "Northface Jackie",
         tag: "northfacejackie",
         price: 660,
         inCart: 0
        },
        
        {
         name: "Squared Tshirt",
         tag: "squaredtshirt",
         price: 120,
         inCart: 0
        },

        {
         name: "Aaliyah Tshirt",
         tag: "aaliyahtshirt",
         price: 200,
         inCart: 0
        },

        {
         name: "Floral Blouse",
         tag: "floralblouse",
         price: 140,
         inCart: 0
        },

        {
         name: "Croptop Mango",
         tag: "croptopmango",
         price: 300,
         inCart: 0
        },

        {
         name: "Adidas Maroon",
         tag: "adidasmaroon",
         price: 300,
         inCart: 0
        },

        {
         name: "Floral Skirt",
         tag: "floralskirt",
         price: 400,
         inCart: 0
        },

        {
         name: "Gucci Backpack",
         tag: "guccibackpack",
         price: 4000,
         inCart: 0
        },

        {
         name: "Northface Bennie",
         tag: "northfacebennie",
         price: 300,
         inCart: 0
        },

        {
         name: "Purple Dress",
         tag: "purpledress",
         price: 450,
         inCart: 0
        },

        {
        name: "Blouse Stripes",
         tag: "blousestripes",
         price: 280,
         inCart: 0
        },

        {
         name: "Biggie Tshirt",
         tag: "biggietshirt",
         price: 280,
         inCart: 0
        },

        {
         name: "Plaid Skirt",
         tag: "plaidskirt",
         price: 250,
         inCart: 0
        },
    ]

    for( let i = 0; i < CartButtons.length; i ++ ){
        CartButtons[i].addEventListener('click', ()=>{
         cartNumbers(products[i]);
         totalCost(products[i]);
        })
 }


 // FUNCTION FOR ONLOAD EVENT THAT USEFUL FOR NOT LOSING DATA AFTER REFRESHING THE PAGE!!!!!!!!
 function onLoadCartNumbers(){
     let productNumbers = localStorage.getItem('cartNumbers');

     if(productNumbers){
         document.querySelector('#CART span').textContent= productNumbers;
     }

 }
 // FUNCTION FOR ONLOAD EVENT THAT USEFUL FOR NOT LOSING DATA AFTER REFRESHING THE PAGE!!!!!!!!

 function cartNumbers(product, action){
     // PRODUCTNUMBERS ARE EQUAL TO CARTNUMBERS!!!!!!!!!!!!!!!
     let productNumbers = localStorage.getItem('cartNumbers');
     // PRODUCTNUMBERS ARE EQUAL TO CARTNUMBERS!!!!!!!!!!!!!!!

     // PRODUCTNUMBERS CONVERTED FROM A STRING TO A NUMBER!!!!!!!!!!!!!
     productNumbers= parseInt(productNumbers)
     // PRODUCTNUMBERS CONVERTED FROM A STRING TO A NUMBER!!!!!!!!!!!!!

     let cartItems = localStorage.getItem('ProductsInCart');
     cartItems= JSON.parse(cartItems);

     if( action == "decrease"){
        localStorage.setItem('cartNumbers', productNumbers - 1);
        document.querySelector('#CART span').textContent= productNumbers - 1;

     }else if(productNumbers){
         localStorage.setItem('cartNumbers', productNumbers + 1);
         document.querySelector('#CART span').textContent= productNumbers + 1;
     }else{
         localStorage.setItem('cartNumbers', 1);
         document.querySelector('#CART span').textContent= 1;
     }

// IF A PRODUCT IS ALREADY ADDED THEN ADD TO THE SUM THAT WILL EQUAL INFINITE NUMBER OF TIMES!!!!!!!!
    //   if(productNumbers){
    //      localStorage.setItem('cartNumbers', productNumbers + 1);
    //      document.querySelector('#CART span').textContent= productNumbers + 1;


    //   }else{

    //   }
// IF A PRODUCT IS ALREADY ADDED THEN ADD TO THE SUM THAT WILL EQUAL INFINITE NUMBER OF TIMES!!!!!!


     setItems(product);
 }




 // FUNCTION FOR SETTING THE PRODUCT NAMES IN A CART !!!!!!!!!!!!!!!!!!!!!
 function setItems(product){
     let cartItems = localStorage.getItem('ProductsInCart');
     cartItems= JSON.parse(cartItems);
      console.log("My cartItems are", cartItems);


     //  AN IF STATEMENT FOR INCART INCREASE!!!!!!!!!!!!
     if(cartItems != null){

         if(cartItems[product.tag] == undefined){
             cartItems = {
                 ...cartItems, [product.tag] : product
             }

         }
         cartItems[product.tag].inCart += 1;
     }else
     {
         product.inCart= 1;

         cartItems = {
           [product.tag]:product
                }
     }
     //  AN IF STATEMENT FOR INCART INCREASE!!!!!!!!!!!!
     localStorage.setItem('ProductsInCart', JSON.stringify(cartItems));
  

 }
 // FUNCTION FOR SETTING THE PRODUCT NAMES IN A CART!!!!!!!!!!!!!!!!!!!!!!


 // FUNCTION FOR THE TOTALCOST!!!!!!!!!!!!!!!!!

 function totalCost(product, action){

     let cartCost = localStorage.getItem('totalCost');
     
     if ( action == "decrease"){
        cartCost= parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost - product.price);
     }
     else if(cartCost != null){
     cartCost = parseInt(cartCost);

  localStorage.setItem("totalCost", cartCost + product.price)

     }else{
   localStorage.setItem("totalCost", product.price);

     }


 }
 // FUNCTION FOR THE TOTALCOST!!!!!!!!!!!!!!!!!


//  ADD TO CART FUNCTION
function  displayCart(){
    let cartItems = localStorage.getItem('ProductsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');
    cartCost= parseInt(cartCost);
    let emptyCart = document.querySelector('.emptycart');

    if(cartItems && products){

        productContainer.innerHTML = '';
        emptyCart.style.display = "none";

        Object.values(cartItems).map(item =>{
            productContainer.innerHTML +=`

            <div class="product">
            <i class="fa-solid fa-circle-xmark remove"></i>
              <img src="./Pictures/${item.tag}.jpg">
              <span>${item.name}<span>
            </div>

            
            <div class="price-title">R${item.price},00</div>

  

            <div class="quantity-title">
    <i class="fa-solid fa-caret-left decrease"></i>
              <span>${item.inCart}</span>
    <i class="fa-solid fa-caret-right increase"></i>

            </div>


            <div class="total-title">
               R ${item.inCart * item.price},00
            </div>

            

            `
        })



        productContainer.innerHTML +=`

          <div class="basketTotalContainer">
          <h4 class="basketTotalTitle">
          Basket Total
          </h4>
          <h4 class="basketTotal">
         R${cartCost},00
         </h4>
        `

        productContainer.innerHTML +=`
           <button type="button" class="checkOut"><a href="checkout.html">Proceed to checkout</a></button>
        `
        
    }else{
        if( cartCost == 0 ){
            emptyCart.style.display ="flex"; 
        }
    }

    deleteButtons();
    manageQuantity();

}
//  ADD TO CART FUNCTION






// FUNCTION FOR DELETING AN ITEM IN THE CART-----------------

function deleteButtons(){
    let deleteBTN = document.querySelectorAll('.remove');
    let productName;
    let productNumbers= localStorage.getItem('cartNumbers');
    let cartItems = localStorage.getItem('ProductsInCart');
    cartItems = JSON.parse(cartItems);
    let cartCost= localStorage.getItem('totalCost');
    
    for(let i= 0; i < deleteBTN.length; i++){
        deleteBTN[i].addEventListener('click', ()=>{
           
         productName =  deleteBTN[i].parentElement.textContent.trim().toLowerCase().replace(/ /g, '');
       
    
         localStorage.setItem('cartNumbers', productNumbers -  cartItems[productName].inCart );
    
         localStorage.setItem('totalCost', cartCost - 
         (cartItems[productName].price * cartItems[productName].inCart) );
    
         delete cartItems[productName];
    
         localStorage.setItem('ProductsInCart', JSON.stringify(cartItems));
    


         displayCart();
         onLoadCartNumbers();
    
        });
    }
    
    }
// FUNCTION FOR DELETING AN ITEM IN THE CART-----------------


// FUNCTION FOR QUANTITY------------------------
function manageQuantity(){

    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let cartItems = localStorage.getItem('ProductsInCart');
    cartItems= JSON.parse(cartItems);
    let currentQuantity = 0;
    currentProduct= "";


    for(let k =0; k < decreaseButtons.length; k++){
        decreaseButtons[k].addEventListener('click', ()=>{
           currentQuantity = decreaseButtons[k].parentElement.querySelector('span').textContent;
           currentProduct = decreaseButtons[k].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();

           if( cartItems[currentProduct].inCart > 1){
            cartItems[currentProduct].inCart -=  1;
            cartNumbers(cartItems[currentProduct], "decrease");
           totalCost( cartItems[currentProduct], "decrease");
            localStorage.setItem('ProductsInCart', JSON.stringify(cartItems));
            displayCart();
           }
         
        })
    }

    for(let i =0; i < increaseButtons.length; i++){
        increaseButtons[i].addEventListener('click', ()=>{
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();

            if( cartItems[currentProduct]){
             cartItems[currentProduct].inCart +=  1;
             cartNumbers(cartItems[currentProduct]);
            totalCost( cartItems[currentProduct]);
             localStorage.setItem('ProductsInCart', JSON.stringify(cartItems));
             displayCart();
            }
        })
    }
    onLoadCartNumbers();

    }
// FUNCTION FOR QUANTITY------------------------



 onLoadCartNumbers();
 displayCart();





