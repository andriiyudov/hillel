const savedProducts = {};

const showCategories = categories => {
    clearElements(['categories', 'products', 'details']);

    const categoriesElem = document.querySelector('.categories');

    categories.forEach(({name, id}) => {
        const categoryElem = document.createElement('div');

        categoryElem.setAttribute('data-category-id', id);
        categoryElem.textContent = name;
        categoryElem.onclick = showProducts;

        categoriesElem.appendChild(categoryElem);
    });
};

const showProducts = ({target}) => {
    clearElements(['products', 'details']);

    const productsElem = document.querySelector('.products');
    const categoryId = +target.getAttribute('data-category-id');
    const products = DATA_MAP.get(categoryId).products;

    products.forEach(({name, id}) => {
        const productElem = document.createElement('div');

        productElem.setAttribute('data-category-id', categoryId);
        productElem.setAttribute('data-product-id', id);
        productElem.textContent = name;
        productElem.onclick = showDetails;

        productsElem.appendChild(productElem);
    });
};

const showDetails = ({target}) => {
    clearElements(['details']);

    const detailsElem = document.querySelector('.details');
    const categoryId = target.getAttribute('data-category-id');
    const productId = target.getAttribute('data-product-id');

    const makeOrderButtonElem = document.createElement('button');
    const product = PRODUCTS_MAP.get(productId);

    makeOrderButtonElem.textContent = `Order product: ${product.name}`;
    makeOrderButtonElem.addEventListener('click', () => {
        savedProducts[categoryId] = savedProducts[categoryId] || {};
        savedProducts[categoryId][productId] = product;

        console.log('Your product successfully ordered');
        console.log(savedProducts);
    });
    detailsElem.appendChild(makeOrderButtonElem);

    console.log('Details', product);
};
