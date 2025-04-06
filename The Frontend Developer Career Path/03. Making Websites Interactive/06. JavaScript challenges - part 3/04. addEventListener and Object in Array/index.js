let data = [
    {
        player: 'Jane',
        score: 52,
    },
    {
        player: 'Mark',
        score: 41,
    },
];

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
const btn_score = document.getElementById('btn-score');
btn_score.addEventListener('click', () => {
    for (let obj of data) {
        if (obj.player === 'Jane') {
            console.log(obj.score);
        }
    }
});
