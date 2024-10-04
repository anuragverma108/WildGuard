function togglePasswordVisibility(id) {
    const passwordField = document.getElementById(id);
    const icon = passwordField.nextElementSibling.querySelector('i');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } 
    else {
        passwordField.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}   
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-tracker');
    document.body.appendChild(cursor);

    let mouseMoving = false;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;  // Accurate positioning
        cursor.style.top = `${e.clientY}px`;

        cursor.classList.add('cursor-active');  // Show tracker on mouse move

        mouseMoving = true;

        // Hide tracker if the mouse stops moving after a short delay
        setTimeout(() => {
            if (!mouseMoving) {
                cursor.classList.remove('cursor-active');
            }
            mouseMoving = false;
        }, 300);
    });

    document.addEventListener('mousedown', () => {
        cursor.classList.add('cursor-scale');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('cursor-scale');
    });

    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-active');
    });

    document.addEventListener('mouseenter', () => {
        if (mouseMoving) {
            cursor.classList.add('cursor-active');
        }
    });

