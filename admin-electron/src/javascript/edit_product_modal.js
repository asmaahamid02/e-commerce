console.log("working?");

const modalBtn = document.querySelector('.edit_product_modal_btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
})

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
})
