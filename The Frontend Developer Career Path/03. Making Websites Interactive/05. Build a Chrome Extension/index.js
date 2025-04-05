let myLeads = ['www.awesomelead.com', 'www.epiclead.com', 'www.greatlead.com'];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value);
});

let list = '';
for (let lead of myLeads) {
    list += `<li>${lead}</li>`;
}
ulEl.innerHTML = list;
