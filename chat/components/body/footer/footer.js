import {createElement} from '../../utils/createElement';
import './footer.scss';

const createTextarea = (onChange, text) => {
    const sectionElem = document.createElement('div');
    sectionElem.className = 'footer__section';

    const onchange = ({target: {value}}) => {
        onChange(value);
    };

    createElement(
        'textarea',
        sectionElem,
        {className: 'footer__textarea', onchange, textContent: text},
    );

    return sectionElem;
};
const createActionButton = onClick => {
    const sectionElem = document.createElement('div');
    sectionElem.className = 'footer__section';

    createElement(
        'button',
        sectionElem,
        {className: 'footer__button', textContent: 'Send message', onclick: onClick},
    );

    return sectionElem;
};


export const createFooter = (container, onActionButtonClick, onTextareaChange, textAreaText) => {
    container.innerHTML = '';

    container.appendChild(createTextarea(onTextareaChange, textAreaText));
    container.appendChild(createActionButton(onActionButtonClick));
};
