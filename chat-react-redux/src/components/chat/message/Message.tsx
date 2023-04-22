import React from 'react';

// @ts-ignore
import closeIcon from '../../../images/close-icon.png'
import {DEFAULT_CONTACT_AVATAR_URL} from '../../constants';

import './Message.css';
import type {FC} from 'react';
import type {IdType} from '../../../typedef';

const CURRENT_USER_AVATAR_URL = 'https://randomuser.me/api/portraits/lego/1.jpg';

type Props = {
    id: IdType,
    text: string,
    isCurrentUser: boolean,
    deleteMessage: (id: IdType) => void,
    contactAvatarUrl?: string,
};

const Message: FC<Props> = ({id, text, isCurrentUser, deleteMessage, contactAvatarUrl}) => {
    const onRemoveIconClick = () => {
        deleteMessage(id)
    }

    return (
        <div className={`message ${isCurrentUser ? '' : 'message_second'}`}>
            <div className="message__avatar">
                <img
                    className="message__image"
                    src={isCurrentUser ? CURRENT_USER_AVATAR_URL : contactAvatarUrl}
                    alt="lego"
                />
            </div>
            <div className="message__bubble">
                <div className="message__text">{text}</div>
                {isCurrentUser && <div className="message__remove-button">
                    <img src={closeIcon} alt="Close icon" onClick={onRemoveIconClick}/>
                </div>}
            </div>
        </div>
    )
}

Message.defaultProps = {
    contactAvatarUrl: DEFAULT_CONTACT_AVATAR_URL
}

export default Message;
