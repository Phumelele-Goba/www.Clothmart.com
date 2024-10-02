

let button= document.querySelector(".view-product-btn")

// let buttonLoading = document.querySelector(".viewItemSpinner");



button.classList.toggle.add('viewItemSpinner')
button.classList.toggle.remove('viewItemSpinner')





// Pagination start
let ulTag = document.querySelector('.pagination');

function element(totalPages, page){
    let liTag= '';
    let totalPages= 3;
    let beforepages= page -1;
    let afterpags= page +1



    if(page > 1){  // If Page is greater than one Show a button for previous
   
           liTag +=  `<li class="page-item" onclick="element(totalPages, ${page - 1})"><a class="page-link previous" href="#">Previous</a></li>`
    }

    if(page < totalPages){

    liTag += `<li class="page-item" onclick="element(totalPages, ${page + 1})"><a class="page-link Next" href="#">Next</a></li>` 
    }


}
element(3, 3)










// Pagination end



search.addEventListener('input', searchEvent);

function searchEvent(e){
    let inputsearch = document.querySelector('#Search-Shop');


    // Converts the value to a lowercase
    let text = e.target.value.toLowerCase();
 
// Get the Items into An Array
    let items = itemsContainer.querySelectorAll('.Header-text');

    Array.from(items).forEach(function(item){
        let itemListName = item.Children[0].textContent

        if(itemListName.toLowerCase().indexOf(text) != -1){
            item.style.display ='block';
        }else{
            item.style.display ='none';


        }
    })

 




}
