
function search(){
    let searchBox = document.querySelector(".searchBox").value.toUpperCase();
    let item= document.querySelectorAll('.proDuct');
    let pname = document.getElementsByTagName('h4');

    for(let i=0; i <= pname.length; i++){
     
        let a = item[i].getElementsByTagName('h4')[0];

        let value= a.innerHTML || a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(searchBox) > -1){
            item[i].style.display = "";

        }else{
            item[i].style.display = "none";
        }

    }

} 





