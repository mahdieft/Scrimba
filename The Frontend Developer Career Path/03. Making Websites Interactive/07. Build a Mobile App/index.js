import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js';

const firebaseConfig = {
    databaseURL: "https://leads-tracker-ap-default-rtdb.firebaseio.com/"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const ulEl = document.getElementById('ul-el');

deleteBtn.addEventListener('dblclick', () => {
    myLeads = [];
    renderLeads(myLeads);
});

inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    renderLeads(myLeads);
});

function renderLeads(leads) {
    let list = '';
    for (let lead of leads) {
        list += `<li><a href="${lead}" target="_blank">${lead}</a></li>`;
    }
    ulEl.innerHTML = list;
};
