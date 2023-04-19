import {
    ADD_CONTACT,
    GET_CONTACTS_FAILURE,
    GET_CONTACTS_LOADING,
    GET_CONTACTS_SUCCESS,
} from '../actions/contactsActions';

const INITIAL_STATE = {
    contacts: [],
    errors: false,
    loading: false,
};

export const contactsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            const contact = action.payload;

            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    {...contact, id: crypto.randomUUID(), avatarUrl: contact.avatarUrl || undefined}
                ]
            };

        case GET_CONTACTS_LOADING:
            return {
                ...state,
                loading: true,
            }

        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                loading: false,
                contacts: action.payload
            };

        case GET_CONTACTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}
