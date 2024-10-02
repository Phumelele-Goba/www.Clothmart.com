
let bgModal = document.querySelector(".bg-modal_accnt");
let buttonAccnt = document.querySelector("#Open-accnt");
let accntClose= document.querySelector('.account-close');


buttonAccnt.addEventListener('click', ()=>{
    bgModal.style.display = 'flex';
})

accntClose.addEventListener('click', ()=>{
    bgModal.style.display = 'none';
})