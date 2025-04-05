let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');
const ulEl = document.getElementById('ul-el');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
});

inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    renderLeads(myLeads);
});

tabBtn.addEventListener('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        renderLeads(myLeads);
    });
});

function renderLeads(leads) {
    let list = '';
    for (let lead of leads) {
        list += `<li><a href="${lead}" target="_blank">${lead}</a></li>`;
    }
    ulEl.innerHTML = list;
};
