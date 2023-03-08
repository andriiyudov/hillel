import {createElement} from '../../utils/createElement';
import './message.scss';

const CURRENT_USER_AVATAR_URL = 'https://randomuser.me/api/portraits/lego/1.jpg';
const SECOND_USER_AVATAR_URL = 'https://randomuser.me/api/portraits/lego/2.jpg';


export const createMessage = ({id, text, isCurrentUser}) => {
    const messageElem = document.createElement('div');
    messageElem.className = `message ${isCurrentUser ? '' : 'message_second'}`;

    const avatarElem = createElement('div', messageElem, {className: 'message__avatar', 'data-message-id': id});
    createElement(
        'img',
        avatarElem,
        {
            className: 'message__image',
            src: isCurrentUser ? CURRENT_USER_AVATAR_URL : SECOND_USER_AVATAR_URL,
        });
    createElement('div', messageElem, {className: 'message__bubble', textContent: text});

    return messageElem;
};
