import {displayMessages} from './messages';
import {displayTextArea} from './textArea';
import {actionButtons} from './actionButtons';
import {DEFAULT_MESSAGES, MESSAGES_KEY} from './constants';
import {createElement} from '../../utils/createElement';
import {Storage} from '../../storage/storage';
import {createMessage} from './utils/createMessage';
import './body.scss';
import {getRandomMessage} from './utils/getRandomMessage';

export const body = () => {
    let newMessageText = '';
    const currentMessages = Storage.get(MESSAGES_KEY) || [...DEFAULT_MESSAGES];

    const bodyElem = document.createElement('div');
    bodyElem.className = 'body';

    createElement('div', bodyElem, {className: 'body__messages'});
    createElement('div', bodyElem, {className: 'body__section body__textarea-container'});

    const onTextAreaChange = value => {
        newMessageText = value;
    };
    const onButtonClick = () => {
        if (newMessageText.trim()) {
            currentMessages.push(createMessage(newMessageText));
            newMessageText = '';

            displayMessages(bodyElem, currentMessages);
            displayTextArea(bodyElem, onTextAreaChange, newMessageText);

            replyOnMessage();
        }
    };
    const replyOnMessage = () => {
        setTimeout(() => {
            currentMessages.push(getRandomMessage());

            displayMessages(bodyElem, currentMessages);

            Storage.set(MESSAGES_KEY, currentMessages);
        }, 2000);
    };

    displayMessages(bodyElem, currentMessages);
    displayTextArea(bodyElem, onTextAreaChange, newMessageText);
    bodyElem.appendChild(actionButtons(onButtonClick));

    return bodyElem;
};
