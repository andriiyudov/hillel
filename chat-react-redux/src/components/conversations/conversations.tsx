import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Header from '../header/Header';
import {Contact} from './contact/contact';
import {getLastMessage} from './utils/getLastMessage';

import './conversations.css';
import type {State} from '../../store';


export const Conversations = () => {
    const {contacts, messagesObj} = useSelector((state: State) => ({
        contacts: state.contacts.contacts,
        messagesObj: state.messagesObj.messagesObj,
    }));

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
