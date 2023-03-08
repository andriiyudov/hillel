import {createElement} from '../utils/createElement';
import './header.scss';

export const createHeader = () => {
    const headerElem = document.createElement('header');
    headerElem.className = 'header';

    createElement('h1', headerElem, {textContent: 'SPDU', className: 'header__title'});

    return headerElem;
};
