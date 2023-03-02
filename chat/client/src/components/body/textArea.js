import {createElement} from '../../utils/createElement';

export const displayTextArea = (container, onChange, text) => {
    const sectionElem = container.querySelector('.body__textarea-container');

    if (sectionElem) {
        sectionElem.innerHTML = '';

        const onchange = ({target: {value}}) => {
            onChange(value);
        };

        createElement('textarea', sectionElem, {textContent: text, className: 'body__textarea', onchange});
    }
};
