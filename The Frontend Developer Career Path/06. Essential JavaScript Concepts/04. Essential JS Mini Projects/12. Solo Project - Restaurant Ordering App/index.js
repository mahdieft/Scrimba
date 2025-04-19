import { menu_array } from './data.js';
import { display_menu, render_order_summary } from './functions.js';

display_menu(menu_array);

const orders = {};
const menu_map = new Map();
menu_array.forEach(item => {
    menu_map.set(String(item.id), item);
});

document.getElementById('menu').addEventListener('click', e => {
    if (e.target.id.length !== 0) {
        const item = menu_map.get(e.target.id);
        if (item.id in orders) {
            orders[item.id]++;
        } else {
            orders[item.id] = 1;
        }
    }
    render_order_summary(orders, menu_map);
});
