//For the carousel in the products page
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});

//Edit profile modal
const modalBtn = document.getElementById('edit-profile-icon');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
const modalSave=document.querySelector('.edit_profile_modal_save_btn')

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