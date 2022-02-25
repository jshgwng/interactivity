/**Scripts */
/**Show Privacy alert when the page loads */
const privacyAlert = document.getElementById('alert-div');

window.addEventListener('load', ()=>{
    privacyAlert.classList.remove('d-none');
});


/** Scroll to top when Top button is click */
const backToTop = document.getElementById('top');

backToTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
    });
})


/** Show Modal when user takes more than 10 seconds on website */
// Create bootstrap modal
var signUpModal = new bootstrap.Modal(document.getElementById('sign-up-modal'));

// Display modal after 10 seconds
setTimeout(() => {
    signUpModal.toggle();
}, 20000);

/** Display Success methods */
const submitBtn = document.getElementById('submit-form');
const successMessage = document.getElementById('success-message');

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    submitBtn.textContent = 'Applying...';
    setTimeout(() => {
        submitBtn.textContent = 'Apply';
        successMessage.classList.remove('d-none');
    }, 1000);
    setTimeout(() => {
        successMessage.classList.add('d-none');
    }, 4000);


})