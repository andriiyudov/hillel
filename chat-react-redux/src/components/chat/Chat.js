import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {ENTER_KEY_CODE} from './constants';
import {getRandomMessage} from './utils/getRandomMessage';
import Message from './message/Message';
import Header from '../header/Header';
import {useMessages} from '../../hooks/useMessages';
import './Chat.css';


const Chat = () => {
    const [textareaText, setTextareaText] = useState('');

    const {saveMessage, deleteMessage: deleteMessageAction} = useMessages();
    const dispatch = useDispatch();
    const {conversationId} = useParams();
    const {contacts, messagesObj} = useSelector(state => ({
        contacts: state.contacts.contacts,
        messagesObj: state.messagesObj.messagesObj,
    }));

    const messages = messagesObj[conversationId] || [];
    const contact = contacts.find(({id}) => id === conversationId);

    const onTextAreaChange = ({target: {value}}) => {
        setTextareaText(value);
    }

    const onTextAreaKeyDown = ({keyCode}) => {
        if (keyCode === ENTER_KEY_CODE) {
            onApply();
        }
    }

    const onApply = () => {
        if (textareaText.trim()) {
            dispatch(saveMessage({text: textareaText, isCurrentUser: true}, conversationId));
            onMessageReply();
            setTextareaText('');
        }
    }

    const onMessageReply = () => {
        setTimeout(() => (
            dispatch(saveMessage({text: getRandomMessage().text, isCurrentUser: false}, conversationId))
        ), 1000);
    }

    const deleteMessage = id => {
        dispatch(deleteMessageAction(id, conversationId))
    }

    return (
        <>
            <Header backButton={true}/>
            <div className="chat">
                <h1>Chat with: {contact.name}</h1>
                <div className="chat__messages">
                    {messages.map(message => (
                        <Message
                            key={message.id}
                            {...message}
                            deleteMessage={deleteMessage}
                            contactAvatarUrl={contact.avatarUrl}
                        />
                    ))}
                </div>
                <div className="chat__action-buttons">
                    <div className="chat__section">
                        <textarea
                            className="chat__textarea"
                            onChange={onTextAreaChange}
                            onKeyDown={onTextAreaKeyDown}
                            value={textareaText}
                        />
                    </div>
                    <div className="chat__section">
                        <button className="chat__button" onClick={onApply}>Send message</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;
