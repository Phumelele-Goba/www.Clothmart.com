
let loginModal = document.querySelector('.bg-modal_login');
let userIcon = document.querySelector('#user i');
let closeLogin = document.querySelector('.login-close');

userIcon.addEventListener('click', ()=>{
    loginModal.style.display = 'flex';
})

closeLogin.addEventListener('click', ()=>{
    loginModal.style.display = 'none';
})