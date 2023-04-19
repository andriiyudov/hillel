import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Header from '../header/Header';
import {useContacts} from '../../hooks/useContacts';

const DEFAULT_FORM_VALUE = {name: '', avatarUrl: ''};

export const CreateContact = () => {
    const [form, setForm] = useState(DEFAULT_FORM_VALUE);
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const {saveContact} = useContacts();

    const onFormChange = ({target: {value, name}}) => {
        setForm({...form, [name]: value});
    }

    const saveNewContact = () => {
        if (Object.values(form).some(value => !!value)) {
            const nextForm = {...form, id: crypto.randomUUID(), avatarUrl: form.avatarUrl || undefined};

            dispatch(saveContact(nextForm));
            navigation('/');
        }
    }

    const clearForm = () => {
        setForm(DEFAULT_FORM_VALUE);
    }

    return (
        <div>
            <Header backButton={true} />
            <div className="create-contact">
                <h1>Create Contact</h1>
                <div>
                    <div>
                        Contact Name:
                        <input type="text" onChange={onFormChange} name="name" value={form.name}/>
                    </div>
                    <div>
                        Contact Avatar:
                        <input type="text" onChange={onFormChange} name="avatarUrl" value={form.avatarUrl}/>
                    </div>
                    <button onClick={saveNewContact}>Create</button>
                    <button onClick={clearForm}>Clear</button>
                </div>
            </div>
        </div>
    );
}
