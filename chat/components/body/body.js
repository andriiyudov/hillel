import {createElement} from '../utils/createElement';
import {DEFAULT_MESSAGES, MESSAGES_KEY} from './constants';
import {createMessages} from './messages/messages';
import {createFooter} from './footer/footer';
import {getRandomMessage} from './utils/getRandomMessage';
import {createMessage} from './utils/createMessage';
import {Storage} from '../../storage/storage';


export const createBody = () => {
    let textareaText = '';
    const messages = Storage.get(MESSAGES_KEY) || [...DEFAULT_MESSAGES];

    const bodyElem = document.createElement('div');
    bodyElem.className = 'body';

    const messagesElem = createElement('div', bodyElem, {className: 'body__messages'});
    const footerElem = createElement('div', bodyElem, {className: 'footer'});

    const onTextareaChange = value => {
        textareaText = value;
    };

    const onActionButtonClick = () => {
        if (textareaText.trim()) {
            messages.push(createMessage(textareaText));
            textareaText = '';

            createMessages(messagesElem, messages);
            createFooter(footerElem, onActionButtonClick, onTextareaChange, textareaText);

            replyOnMessage();
        }
    };
    const replyOnMessage = () => {
        setTimeout(() => {
            messages.push(getRandomMessage());

            createMessages(messagesElem, messages);
            Storage.set(MESSAGES_KEY, messages);
        }, 1000);
    };

    createMessages(messagesElem, messages);
    createFooter(footerElem, onActionButtonClick, onTextareaChange, textareaText);

    return bodyElem;
};
