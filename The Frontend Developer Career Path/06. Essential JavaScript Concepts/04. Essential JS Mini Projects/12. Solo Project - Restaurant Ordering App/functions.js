const build_menu_item_html = item => `
    <article class="menu-item">
        <p class="menu-item-image">${item.emoji}</p>
        <div class="menu-item-details">
            <h2 class="menu-item-title">${item.name}</h2>
            <p class="menu-item-description">${item.ingredients.join(', ')}</p>
            <p class="menu-item-price">$${item.price}</p>
        </div>
        <p class="menu-item-add" id="${item.id}">+</p>
    </article>
`;

const display_menu = menu_items => {
    let menu_html = '';
    menu_items.forEach(item => {
        menu_html += build_menu_item_html(item);
    });
    document.getElementById('menu').innerHTML = menu_html;
};

const render_order_summary = (orders, menu_map) => {
    const order_ids = Object.keys(orders);

    let order_summary = '';
    order_ids.forEach(order_id => {
        order_summary += `
            <div class="order-item">
                <p class="order-item-detail order-item-name">${menu_map.get(order_id).name}</p>
                <p class="order-item-detail order-item-remove">remove</p>
                <p class="order-item-detail order-item-price">${menu_map.get(order_id).price * orders[order_id]}</p>
            </div>
        `;
    });

    const order_summary_div = document.getElementById('order_summary');
    if (order_summary) {
        order_summary_div.innerHTML = `
            <h2>Your Order</h2>
            ${order_summary}
            <button class="order-total-complete">Complete order</button>
        `;
        order_summary_div.classList.remove('hidden');
    } else {
        order_summary_div.classList.add('hidden');
    }
};


export {
    display_menu,
    render_order_summary,
};
