import {createMessage} from './message';

export const createMessages = (container, messages) => {
    const messagesElem = document.createElement('div');
    messagesElem.className = 'body__messages';
    container.innerHTML = '';

    messages.forEach(message => {
        messagesElem.appendChild(createMessage(message));
    });

    container.appendChild(messagesElem);
};


