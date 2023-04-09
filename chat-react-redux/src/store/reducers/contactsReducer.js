import {ADD_CONTACT} from '../actions/contactsActions';

const INITIAL_STATE = [];

export const contactsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            const contact = action.payload;

            return [
                ...state,
                {...contact, id: crypto.randomUUID(), avatarUrl: contact.avatarUrl || undefined}
            ]

        default:
            return state;
    }
}
