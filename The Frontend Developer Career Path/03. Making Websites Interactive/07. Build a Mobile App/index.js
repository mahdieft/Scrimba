import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js';
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js';

const firebaseConfig = {
    databaseURL: 'https://leads-tracker-ap-default-rtdb.firebaseio.com/',
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, 'leads');

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const ulEl = document.getElementById('ul-el');

onValue(referenceInDB, function (snapshot) {
    const snapshotValues = snapshot.val();
    const leads = Object.values(snapshotValues);
    renderLeads(leads);
});

deleteBtn.addEventListener('dblclick', () => {
});

inputBtn.addEventListener('click', function () {
    push(referenceInDB, inputEl.value);
    inputEl.value = '';
});

function renderLeads(leads) {
    let list = '';
    for (let lead of leads) {
        list += `<li><a href="${lead}" target="_blank">${lead}</a></li>`;
    }
    ulEl.innerHTML = list;
}
