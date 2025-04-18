import { menuArray } from './data.js';
import { display_menu } from './functions.js';

display_menu(menuArray);

document.getElementById('menu').addEventListener('click', e => {
    if (e.target.id.length !== 0) {
        const item = menuArray.filter(menu => menu.id === Number(e.target.id));
        console.log(item);
    }
});
