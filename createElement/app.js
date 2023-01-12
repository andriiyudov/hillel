'use strict'

const parent = document.body;

const handlerClick = () => {
    console.log('click')
}
const handlerOver = () => {
    console.log('hover')
}

const main = createElement(
    'div',
    {className: 'green bold big', id: 'main', name: 'qwertyu'},
    {click: handlerClick, mouseover: handlerOver},
    'hello world',
    parent
);


const form = createElement('form', null, null, '', main);

for (let value of FORM_CONFIG) {
    const currentElement = createElement(value.tagName, value.attributes, value.handlers, value.content, form);
    if (value.tagName === 'select' && value.options.length > 0) {
        for (let option of value.options) {
            createElement('option', option.attributes, option.handlers, option.content, currentElement);
        }
    }
}

