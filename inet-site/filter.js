const showFilteredCategories = () => {
    const findInputElem = document.querySelector('.category-filter-input');
    const findCategoryText = findInputElem.value;

    if (findCategoryText.trim()) {
        findInputElem.value = '';

        const filteredCategories = DATA.filter(({name}) => (
            name.toLowerCase().includes(findCategoryText.toLowerCase())
        ));

        showCategories(filteredCategories);
    }
}
const showDefaultCategories = () => {
    showCategories(DATA);
}

const makeFiltration = () => {
    const findButtonElem = document.querySelector('.category-filter-find-btn');
    const clearButtonElem = document.querySelector('.category-filter-clear-btn');

    findButtonElem.addEventListener('click', showFilteredCategories);
    clearButtonElem.addEventListener('click', showDefaultCategories);
}
