import {createElement} from '../../../utils/createElement';
import './message.scss';

const CURRENT_USER_AVATAR_URL = 'https://randomuser.me/api/portraits/lego/1.jpg';
const SECOND_USER_AVATAR_URL = 'https://randomuser.me/api/portraits/lego/2.jpg';


export const message = ({text, isCurrentUser, id}) => {
    const messageElem = document.createElement('div');
    messageElem.className = `message ${isCurrentUser ? '' : 'message_second'}`;

    const avatarContainerElem = createElement(
        'div',
        messageElem,
        {className: 'message__avatar', 'data-message-id': id},
    );
    createElement(
        'img',
        avatarContainerElem,
        {
            className: 'message__image',
            src: isCurrentUser ? CURRENT_USER_AVATAR_URL : SECOND_USER_AVATAR_URL,
            alt: 'lego',
        },
    );
    createElement('div', messageElem, {className: 'message__bubble', textContent: text});

    return messageElem;
};
