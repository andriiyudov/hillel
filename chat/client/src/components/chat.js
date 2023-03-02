import {header} from './header';
import {body} from './body/body';
import './chat.scss';


export const chat = () => {
    const chatElem = document.getElementsByClassName('chat')[0];
    chatElem.innerHTML = '';

    chatElem.appendChild(header());
    chatElem.appendChild(body());
};
