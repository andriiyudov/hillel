import {useNavigate} from 'react-router-dom';
import {DEFAULT_CONTACT_AVATAR_URL} from '../../constants';

import './contact.css';

export const Contact = ({id, name, avatarUrl, lastMessage}) => {
    const navigate = useNavigate();

    const onMessageClick = () => {
        navigate(`/conversations/${id}`);
    }

    const {text, isCurrentUser} = lastMessage;

    return (
        <div className="contact" onClick={onMessageClick}>
            <div className="contact__avatar">
                <img className="contact__img" src={avatarUrl} alt="User Avatar"/>
            </div>
            <div className="contact__message-container">
                <div>{name}</div>
                {text ? (
                    <div className="contact__message">
                        {isCurrentUser ? 'You: ' : 'Contact: '}
                        {text}
                    </div>
                ) : <div className="contact__message">No messages yet</div>}
            </div>
        </div>
    );
}

Contact.defaultProps = {
    avatarUrl: DEFAULT_CONTACT_AVATAR_URL,
    lastMessage: 'No Messages Yet'
}
