import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {ENTER_KEY_CODE} from './constants';
import {getRandomMessage} from './utils/getRandomMessage';
import Message from './message/Message';
import Header from '../header/Header';
import {useMessages} from '../../hooks/useMessages';
import './Chat.css';

import type {KeyboardEvent, ChangeEvent} from 'react';
import type {ContactType, IdType} from '../../typedef';
import type {State} from '../../store';


const Chat = () => {
    const [textareaText, setTextareaText] = useState('');

    const {saveMessage, deleteMessage: deleteMessageAction} = useMessages();
    const {conversationId = ''} = useParams();
    const {contacts, messagesObj} = useSelector((state: State) => ({
        contacts: state.contacts.contacts,
        messagesObj: state.messagesObj.messagesObj,
    }));

    const messages = messagesObj[conversationId] || [];
    const contact = contacts.find(({id}) => id === conversationId) as ContactType;

    const onTextAreaChange = ({target: {value}}: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaText(value);
    }

    const onTextAreaKeyDown = ({keyCode}: KeyboardEvent<HTMLTextAreaElement>) => {
        if (keyCode === ENTER_KEY_CODE) {
            onApply();
        }
    }

    const onApply = () => {
        if (textareaText.trim()) {
            saveMessage({text: textareaText, isCurrentUser: true, id: crypto.randomUUID()}, conversationId);
            onMessageReply();
            setTextareaText('');
        }
    }

    const onMessageReply = () => {
        setTimeout(() => (
            saveMessage({text: getRandomMessage().text, isCurrentUser: false, id: crypto.randomUUID()}, conversationId)
        ), 1000);
    }

    const deleteMessage = (id: IdType) => {
        deleteMessageAction(id, conversationId)
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
