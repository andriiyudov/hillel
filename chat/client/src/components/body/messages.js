import {message} from './message/message';

export const displayMessages = (container, messages) => {
    const messagesElem = container.querySelector('.body__messages');

    if (messagesElem) {
        messagesElem.innerHTML = '';

        (messages || []).forEach(messageObj => {
            messagesElem.appendChild(message(messageObj));
        });
    }
};
