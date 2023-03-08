import React, {Component} from 'react';
import closeIcon from '../../../images/close-icon.png'

import './Message.css';

const CURRENT_USER_AVATAR_URL = 'https://randomuser.me/api/portraits/lego/1.jpg';
const SECOND_USER_AVATAR_URL = 'https://randomuser.me/api/portraits/lego/2.jpg';

class Message extends Component {
    onRemoveIconClick = () => {
        const {deleteMessage, message: {id}} = this.props;

        deleteMessage(id)
    }

    render() {
        const {message: {text, isCurrentUser}} = this.props;

        return (
            <div className={`message ${isCurrentUser ? '' : 'message_second'}`}>
                <div className="message__avatar">
                    <img
                        className="message__image"
                        src={isCurrentUser ? CURRENT_USER_AVATAR_URL : SECOND_USER_AVATAR_URL}
                        alt="lego"
                    />
                </div>
                <div className="message__bubble">
                    <div className="message__text">{text}</div>
                    {isCurrentUser && <div className="message__remove-button">
                        <img src={closeIcon} alt="Close icon" onClick={this.onRemoveIconClick}/>
                    </div>}
                </div>
            </div>
        );
    }
}

export default Message;
