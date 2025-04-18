const modal = document.getElementById('modal');
const modalInner = document.getElementById('modal-inner');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');
const declineBtn = document.getElementById('decline-btn');
const modalChoiceBtns = document.getElementById('modal-choice-btns');

setTimeout(function () {
    modal.style.display = 'inline';
}, 1500);

declineBtn.addEventListener('mouseenter', function () {
    modalChoiceBtns.classList.toggle('modal-choice-btns-reverse');
});

modalCloseBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

consentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const consentFormData = new FormData(consentForm);
    const name = consentFormData.get('fullName');

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">
            Uploading your data to the dark web...
        </p>
    </div>`;

    setTimeout(() => {
        document.getElementById('upload-text').innerText = `Making the sale...`;
    }, 1500);

    setTimeout(() => {
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `;

        modalCloseBtn.disabled = false;
    }, 3000);
});
