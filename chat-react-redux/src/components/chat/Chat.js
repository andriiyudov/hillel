import React, {useContext, useState} from 'react';
import {useParams} from 'react-router-dom';

import {ENTER_KEY_CODE} from './constants';
import {getRandomMessage} from './utils/getRandomMessage';
import Message from './message/Message';
import Header from '../header/Header';
import {MessagesContext, ContactsContext} from '../App';
import './Chat.css';


const Chat = () => {
    const [textareaText, setTextareaText] = useState('');

    const {conversationId} = useParams();
    const {messagesObj, setMessagesObj} = useContext(MessagesContext);
    const {contacts} = useContext(ContactsContext);

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
            setMessagesObj(prevState => ({
                ...prevState,
                [conversationId]: [
                    ...messages,
                    {id: crypto.randomUUID(), text: textareaText, isCurrentUser: true}
                ]
            }));
            onMessageReply();
            setTextareaText('');
        }
    }

    const onMessageReply = () => {
        setTimeout(() => (
            setMessagesObj(prevState => ({
                ...prevState,
                [conversationId]: [
                    ...(prevState[conversationId] || []),
                    {id: crypto.randomUUID(), text: getRandomMessage().text, isCurrentUser: false}
                ]
            }))
        ), 1000);
    }

    const deleteMessage = id => {
        setMessagesObj(prevState => ({
            ...prevState,
            [conversationId]: messages.filter(message => message.id !== id)
        }));
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
