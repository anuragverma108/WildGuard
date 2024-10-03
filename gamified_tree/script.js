document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    const scoreDisplay = document.getElementById('score');
    const badgeDisplay = document.getElementById('badgeDisplay');
    const plantTreeBtn = document.getElementById('plantTreeBtn');

    const badges = [
        { points: 10, name: 'Bronze Planter' },
        { points: 20, name: 'Silver Planter' },
        { points: 30, name: 'Gold Planter' },
    ];

    function updateBadges() {
        badgeDisplay.innerHTML = ''; // Clear previous badges
        badges.forEach((badge) => {
            if (score >= badge.points) {
                const badgeElement = document.createElement('div');
                badgeElement.classList.add('badge');
                badgeElement.innerHTML = `<strong>${badge.name}</strong> - Earned at ${badge.points} points`;
                badgeDisplay.appendChild(badgeElement);
            }
        });

        if (badgeDisplay.innerHTML === '') {
            badgeDisplay.innerHTML = '<p>No badges earned yet.</p>';
        }
    }

    plantTreeBtn.addEventListener('click', () => {
        score += 1;
        scoreDisplay.textContent = score;
        updateBadges();
    });
});