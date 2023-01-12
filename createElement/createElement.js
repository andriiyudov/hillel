'use strict';

const createElement = (tagName, attributes, events, content, parentElem) => {
    const newElem = document.createElement(tagName);

    if (attributes) {
        for (let key in attributes) {
            if (key === 'className') {
                newElem.setAttribute('class', attributes[key]);
            } else {
                newElem.setAttribute(key, attributes[key]);
            }
        }
    }

    if (events) {
        for (let event in events) {
            newElem.addEventListener(event, events[event]);
        }
    }

    newElem.textContent = content || '';
    parentElem.appendChild(newElem);

    return newElem;
};
