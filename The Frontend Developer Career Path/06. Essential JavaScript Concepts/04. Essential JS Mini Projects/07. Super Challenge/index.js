import { propertyForSaleArr } from './properties/propertyForSaleArr.js';
import { placeholderPropertyObj } from './properties/placeholderPropertyObj';

function getPropertyHtml(properties = [placeholderPropertyObj]) {
    return properties.map((property) => {
        const {propertyLocation, priceGBP, roomsM2, comment, image} = property;
        return `
            <section class="card">
                <img src="/images/${image}">
                    <div class="card-right">
                        <h2>${propertyLocation}</h2>
                        <h3>${priceGBP}</h3>
                        <p>${comment}</p>
                        <h3>${roomsM2.reduce((total, room) => total + room)} m&sup2;</h3>
                    </div>
            </section>
        `;
    }).join('');
}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr);
