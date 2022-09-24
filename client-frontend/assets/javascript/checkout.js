//Edit profile modal
const modalBtn = document.getElementById('edit-profile-icon');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
const modalSave=document.querySelector('.edit_profile_modal_save_btn');
// const burgerMenu = document.querySelector('.menu');

//When the button that should show the modal is clicked
modalBtn.addEventListener('click', function(){

    modalBg.classList.add('bg-active');

})

//When the X at the top left of the modal is clicked
modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
})

//When the Save button is clicked
modalSave.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
})

