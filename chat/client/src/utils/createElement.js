const setAttributes = (element, ...attributes) => {
    attributes.forEach(item => {
        Object.entries(item).forEach(([key, value]) => {
            element[key] = value;
        });
    });
};

export const createElement = (tagName, parentNode, ...attributes) => {
    const element = document.createElement(tagName);
    parentNode.appendChild(element);

    if (attributes.length) {
        setAttributes(element, ...attributes);
    }

    return element;
};
