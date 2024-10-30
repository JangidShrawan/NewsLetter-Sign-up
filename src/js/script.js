const signUpForm = document.getElementById('signup-form');
const errMessage = document.getElementById('err-message');

signUpForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Corrected to call preventDefault as a function

    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    
    if (!isValidEmail(email)) {
        errMessage.textContent = 'Valid email required!';
        emailInput.classList.add('border-red-500'); // Add a red border for better feedback

        emailInput.addEventListener('input', () => { // Changed 'change' to 'input' for real-time feedback
            errMessage.textContent = '';
            emailInput.classList.remove('border-red-500');
        });
    } else {
        const emailFill = document.getElementById('email-filling')
        emailFill.textContent = email;
        document.getElementById('main-container').style.display = 'none';
        document.getElementById('success-box').style.display = 'block';
    }
});

function isValidEmail(email) {
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
document.getElementById('dismiss').addEventListener('click', () => {
    location.reload();
})
