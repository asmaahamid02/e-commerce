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
const modalSave = document.querySelector('.edit_profile_modal_save_btn');
// const burgerMenu = document.querySelector('.menu');

//When the button that should show the modal is clicked
modalBtn.addEventListener('click', function () {

    modalBg.classList.add('bg-active');

})

//When the X at the top left of the modal is clicked
modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
})

//When the Save button is clicked
modalSave.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
})


//-------------------------------------------------------------------------------------------
// Retrieving logged in users data and displaying it in the edit profile modal
//! To remove later on
const client_id = 2;
//!should be const user = JSON.parse(localStorage.getItem("user"));
//! const client_id=user.id;
const client_name_input=document.getElementById('profile-input-name');
const client_username_input=document.getElementById('profile-input-username');
const client_email_input=document.getElementById('profile-input-email');


async function getProfile() {
    const response = await axios.get(`http://localhost/e-commerce/ecommerce-server/api/get_client_profile.php?client_id=${client_id}`).then(
        (response) => {
            console.log(response.data);
            console.log(response.data.data[0]);
            client_name_input.value=response.data.data[0].client_name;
            client_username_input.value=response.data.data[0].client_username;
            client_email_input.value=response.data.data[0].email;
        },
        (error) => {
            console.log(error)
        }
    )
}

// Function calls
getProfile();