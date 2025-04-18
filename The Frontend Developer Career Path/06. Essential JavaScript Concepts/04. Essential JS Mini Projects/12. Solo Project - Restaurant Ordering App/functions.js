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

const display_menu = menuItems => {
    let menu_html = '';
    menuItems.forEach(item => {
        menu_html += build_menu_item_html(item);
    });
    document.getElementById('menu').innerHTML = menu_html;
};

export {
    build_menu_item_html,
    display_menu,
};
