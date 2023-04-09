import {ADD_MESSAGE, DELETE_MESSAGE} from '../actions/messagesActions';

const INITIAL_STATE = {};
export const messagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const {conversationId, text, isCurrentUser} = action.payload;

            return {
                ...state,
                [conversationId]: [
                    ...(state[conversationId] || []),
                    {id: crypto.randomUUID(), text, isCurrentUser}
                ]
            };
        }

        case DELETE_MESSAGE: {
            const {conversationId, id} = action.payload;
            const newMessages = (state[conversationId] || []).filter(message => message.id !== id);

            return {
                ...state,
                [conversationId]: newMessages
            };
        }

        default:
            return state;
    }
}
