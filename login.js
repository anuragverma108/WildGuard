document.addEventListener('DOMContentLoaded', function () {
    const password = document.getElementById('password');
    const passwordStrength = document.getElementById('passwordStrength');
    const email = document.getElementById('email');
    const loginForm = document.getElementById('loginForm');
    const googleSignInBtn = document.getElementById('googleSignInBtn');
    const facebookLoginBtn = document.getElementById('facebookLoginBtn');
    const togglePassword = document.getElementById('togglePassword');

    // Handle Google Sign-In Button Click
    googleSignInBtn.addEventListener('click', function () {
        alert('Google sign-in functionality is not available yet. Please replace the CLIENT_ID placeholder with your Google API credentials.');
    });

    // Facebook login functionality
    facebookLoginBtn.addEventListener('click', function () {
        FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome! Fetching your information....');
                FB.api('/me', { fields: 'name, email' }, function (response) {
                    alert('Successful login for: ' + response.name + '\nEmail: ' + response.email);
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, { scope: 'public_profile,email' });
    });

    // Toggle Password Visibility
    togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('show');
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

// Facebook login functionality
document.getElementById('facebookLoginBtn').addEventListener('click', function () {
    // Check if the client has set their Facebook App ID
    if (!window.fbAppId || window.fbAppId === 'YOUR_FACEBOOK_APP_ID') {
        alert('Please configure your Facebook App ID.');
        return;
    }

    FB.login(function (response) {
        if (response.authResponse) {
            console.log('Welcome! Fetching your information....');
            FB.api('/me', { fields: 'name, email' }, function (response) {
                alert('Successful login for: ' + response.name + '\nEmail: ' + response.email);
                // Handle user information here
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, { scope: 'public_profile,email' });
});

// Function to initialize Facebook SDK dynamically
function loadFacebookSDK(fbAppId) {
    window.fbAppId = fbAppId;  // Set the App ID globally
    window.fbAsyncInit = function () {
        FB.init({
            appId: fbAppId,  // Use the client's provided Facebook App ID
            cookie: true,  // Enable cookies to allow the server to access the session
            xfbml: true,   // Parse social plugins on this webpage
            version: 'v10.0' // Use the latest version of the Facebook API
        });

        FB.AppEvents.logPageView();
    };

    // Dynamically load the Facebook SDK
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

// Example of loading the Facebook SDK (replace with a valid App ID or leave for the client to configure)
loadFacebookSDK('YOUR_FACEBOOK_APP_ID');

// Google login functionality (already provided)
document.getElementById('googleSignInBtn').addEventListener('click', function () {
    handleGoogleSignIn();
});

