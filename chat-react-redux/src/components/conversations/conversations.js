import {useNavigate} from 'react-router-dom';
import Header from '../header/Header';
import {Contact} from './contact/contact';

import './conversations.css';
import {useContext} from 'react';
import {ContactsContext, MessagesContext} from '../App';

const getLastMessage = messages => (
    messages ? messages[messages.length - 1].text : messages
)

export const Conversations = () => {
    const {contacts} = useContext(ContactsContext);
    const {messagesObj} = useContext(MessagesContext);

    const navigation = useNavigate();

    const openNewContactPage = () => {
        navigation('/contacts/new');
    }

    return (
        <div>
            <Header/>
            <div className="conversations">
                <h1>Chats</h1>
                <div>
                    <button onClick={openNewContactPage}>Add New Contact</button>
                </div>
                <div className="conversations__contacts">
                    {!contacts.length && (
                        <div>No Conversations Yet</div>
                    )}
                    {contacts.map(contact => (
                        <Contact
                            key={contact.id}
                            {...contact}
                            lastMessage={getLastMessage(messagesObj[contact.id])}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
