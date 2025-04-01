const score_home = document.getElementById('bulletin-score-home');
const score_guest = document.getElementById('bulletin-score-guest');
const new_game = document.getElementById('new-game');

const points = document.querySelectorAll('.bulletin-points-point');

points.forEach((point) => {
    point.addEventListener('click', () => {
        const pointValue = parseInt(point.dataset.pointValue);
        switch (point.dataset.team) {
            case 'home':
                score_home.textContent = (parseInt(score_home.textContent) + pointValue).toString();
                break;
            case 'guest':
                score_guest.textContent = (parseInt(score_guest.textContent) + pointValue).toString();
                break;
            default:
                console.log('Invalid Team');
                break;
        }
    });
});

new_game.addEventListener('click', () => {
    score_home.textContent = '0';
    score_guest.textContent = '0';
});
