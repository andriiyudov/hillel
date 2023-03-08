import {createHeader} from './header/header';
import {createBody} from './body/body';
import {createFooter} from './body/footer/footer';
import './app.scss';


export const createChat = () => {
    const chatElem = document.getElementsByClassName('chat')[0];

    chatElem.appendChild(createHeader());
    chatElem.appendChild(createBody());
};
