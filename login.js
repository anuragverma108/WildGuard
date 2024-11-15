document.addEventListener('DOMContentLoaded', function () {
    const password = document.getElementById('password');
    const passwordStrength = document.getElementById('passwordStrength');
    const email = document.getElementById('email');
    const loginForm = document.getElementById('loginForm');
    const googleSignInBtn = document.getElementById('googleSignInBtn');
    const facebookLoginButton = document.getElementById('facebookSignInBtn'); // Fixed

    // Handle Google Sign-In Button Click
    googleSignInBtn.addEventListener('click', function () {
        alert('Google sign-in functionality is not available yet. Please replace the CLIENT_ID placeholder with your Google API credentials.');
    });

    // Password Strength Calculation
    password.addEventListener('input', function () {
        const strength = calculatePasswordStrength(this.value);
        updatePasswordStrengthIndicator(strength);
    });

    // show password implementation 
    document.addEventListener('DOMContentLoaded', function () {
        // Get the password input and the toggle icon
        const passwordInput = document.getElementById('password');
        const togglePassword = document.getElementById('togglePassword');
    
        // Add click event listener to the toggle icon
        togglePassword.addEventListener('click', function () {
            // Toggle the type attribute
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
    
            // Toggle the eye icon class
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
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

    // Facebook SDK Initialization
    window.fbAsyncInit = function () {
        FB.init({
            appId: 'YOUR_FACEBOOK_APP_ID',  // Replace with your Facebook App ID
            cookie: true,
            xfbml: true,
            version: 'v16.0' // Ensure you use the latest Facebook SDK version
        });
    };

    // Load Facebook SDK
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Handle Facebook Login
    facebookLoginButton.addEventListener('click', function () {
        FB.login(function (response) {
            if (response.authResponse) {
                // Successful login
                FB.api('/me', { fields: 'name, email' }, function (profileResponse) {
                    alert('Logged in as: ' + profileResponse.name);
                    console.log('User email: ' + profileResponse.email);
                });
            } else {
                alert('User cancelled login or did not fully authorize.');
            }
        }, { scope: 'email' });
    });
});
