document.addEventListener('DOMContentLoaded', function () {
    const password = document.getElementById('password');
    const passwordStrength = document.getElementById('passwordStrength');
    const email = document.getElementById('email');
    const loginForm = document.getElementById('loginForm');
    const googleSignInBtn = document.getElementById('googleSignInBtn');

    // Handle Google Sign-In Button Click
    googleSignInBtn.addEventListener('click', function () {
        alert('Google sign-in functionality is not available yet. Please replace the CLIENT_ID placeholder with your Google API credentials.');
    });

    // Password Strength Calculation
    password.addEventListener('input', function () {
        const strength = calculatePasswordStrength(this.value);
        updatePasswordStrengthIndicator(strength);
    });

    // Email Validation
    email.addEventListener('input', function () {
        this.setCustomValidity('');
        if (this.validity.typeMismatch) {
            this.setCustomValidity('Please enter a valid email address');
        }
    });

    // Handle Login Form Submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (this.checkValidity()) {
            alert('Login successful!');
            // Here you would typically send the form data to your server
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    // Function to Calculate Password Strength
    function calculatePasswordStrength(password) {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
        if (password.match(/\d/)) strength++;
        if (password.match(/[^a-zA-Z\d]/)) strength++;
        return strength;
    }

    // Function to Update Password Strength Indicator
    function updatePasswordStrengthIndicator(strength) {
        const colors = ['#ff4d4d', '#ffa64d', '#ffff4d', '#4dff4d'];
        const widths = ['25%', '50%', '75%', '100%'];
        passwordStrength.style.width = widths[strength];
        passwordStrength.style.backgroundColor = colors[strength];
    }
});
