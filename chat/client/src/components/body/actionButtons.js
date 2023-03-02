import {createElement} from '../../utils/createElement';

export const actionButtons = onClick => {
    const containerElem = document.createElement('div');
    containerElem.className = 'body__section';

    createElement(
        'button',
        containerElem,
        {textContent: 'Send Message', className: 'body__button', onclick: onClick},
    );

    return containerElem;
};
