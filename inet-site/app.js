const showCategories = () => {
    const categoriesElem = document.querySelector('.categories');

    DATA.forEach(({name}, id) => {
        const categoryElem = document.createElement('div');

        categoryElem.setAttribute('data-category-id', id);
        categoryElem.textContent = name;
        categoryElem.onclick = showProducts;

        categoriesElem.appendChild(categoryElem);
    });
};

const showProducts = ({target}) => {
    const productsElem = document.querySelector('.products');
    const categoryId = target.getAttribute('data-category-id');
    const products = DATA[categoryId].products;

    productsElem.innerHTML = '';

    products.forEach(({name}, id) => {
        const productElem = document.createElement('div');
        const product = products[id];

        productElem.setAttribute('data-category-id', categoryId);
        productElem.setAttribute('data-product-id', id);
        productElem.textContent = name;
        productElem.onclick = showDetails;

        productsElem.appendChild(productElem);
    });
};

const showDetails = ({target}) => {
    const categoryId = target.getAttribute('data-category-id');
    const productId = target.getAttribute('data-product-id');

    console.log('Details', DATA[categoryId].products[productId]);
};


showCategories();
