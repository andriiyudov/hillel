const clearElements = classList => {
    for (let className of classList) {
        const elem = document.querySelector(`.${className}`);

        elem.innerHTML = '';
    }
}

const findProducts = (data, categoryId, productId = null) => {
    const products = data.find(({id}) => id === categoryId).products;

    if (productId) {
        return products.find(({id}) => id === productId);
    }

    return products;
};
