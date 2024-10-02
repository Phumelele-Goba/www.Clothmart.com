let accountButton = document.querySelector('.open-accnt');
let bgAccountModal = document.querySelector('.bg-modal_accnt');
let accountClose = document.querySelector('.account-close');

accountButton.addEventListener('click', ()=>{
  bgAccountModal.style.display = "flex";
})

accountClose.addEventListener('click', ()=>{
  bgAccountModal.style.display = "none";
})




// --------------------------INPUT MESSAGES-----------------------------------

let inputname = document.querySelector('#firstname');
let form = document.querySelector('#open-accnt_form');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
})