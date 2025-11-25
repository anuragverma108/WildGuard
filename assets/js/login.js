document.addEventListener('DOMContentLoaded', function () {
    const password = document.getElementById('password');
    const passwordStrength = document.getElementById('passwordStrength');
    const email = document.getElementById('email');
    const loginForm = document.getElementById('loginForm');
    const googleSignInBtn = document.getElementById('googleSignInBtn');
    const facebookLoginButton = document.getElementById('facebookSignInBtn');

    googleSignInBtn.addEventListener('click', function () {
        alert('Google sign-in functionality is not available yet. Please replace the CLIENT_ID placeholder with your Google API credentials.');
    });

    password.addEventListener('input', function () {
        const strength = calculatePasswordStrength(this.value);
        updatePasswordStrengthIndicator(strength);
    });

    document.addEventListener('DOMContentLoaded', function () {
        const passwordInput = document.getElementById('password');
        const togglePassword = document.getElementById('togglePassword');
    
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    email.addEventListener('input', function () {
        this.setCustomValidity('');
        if (this.validity.typeMismatch) {
            this.setCustomValidity('Please enter a valid email address');
        }
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (this.checkValidity()) {
            alert('Login successful!');
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    function calculatePasswordStrength(password) {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
        if (password.match(/\d/)) strength++;
        if (password.match(/[^a-zA-Z\d]/)) strength++;
        return strength;
    }

    function updatePasswordStrengthIndicator(strength) {
        const colors = ['#ff4d4d', '#ffa64d', '#ffff4d', '#4dff4d'];
        const widths = ['25%', '50%', '75%', '100%'];
        passwordStrength.style.width = widths[strength];
        passwordStrength.style.backgroundColor = colors[strength];
    }

    window.fbAsyncInit = function () {
        FB.init({
            appId: 'YOUR_FACEBOOK_APP_ID',
            cookie: true,
            xfbml: true,
            version: 'v16.0'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    facebookLoginButton.addEventListener('click', function () {
        FB.login(function (response) {
            if (response.authResponse) {
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
