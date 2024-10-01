document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const missionContent = document.querySelector('.mission-content');
    const visionContent = document.querySelector('.vision-content');
    const nextPlanContent = document.querySelector('.next-plan-content');

    function switchTab(event) {
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });

        missionContent.style.display = 'none';
        visionContent.style.display = 'none';
        nextPlanContent.style.display = 'none';

        event.target.classList.add('active');

        if (event.target.textContent.includes("Mission")) {
            missionContent.style.display = 'block'; // Show Mission content
        } else if (event.target.textContent.includes("Vision")) {
            visionContent.style.display = 'block'; // Show Vision content
        } else if (event.target.textContent.includes("Next Plan")) {
            nextPlanContent.style.display = 'block'; // Show Next Plan content
        }
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });

    // Initialize by showing only the first tab content (Mission)
    missionContent.style.display = 'block'; // Show only Mission initially
});