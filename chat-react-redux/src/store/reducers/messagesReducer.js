import {ADD_MESSAGE, DELETE_MESSAGE, GET_ALL_MESSAGES_FAILURE, GET_ALL_MESSAGES_LOADING, GET_ALL_MESSAGES_SUCCESS} from '../actions/messagesActions';

const INITIAL_STATE = {
    messagesObj: {},
    error: false,
    loading: false,
};
export const messagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const {conversationId, message} = action.payload;
            const prevMessages = state.messagesObj[conversationId] || [];

            return {
                ...state,
                messagesObj: {
                    ...state.messagesObj,
                    [conversationId]: [
                        ...prevMessages,
                        {id: crypto.randomUUID(), ...message}
                    ]
                }
            };
        }

        case DELETE_MESSAGE: {
            const {conversationId, id} = action.payload;
            const prevMessages = state.messagesObj[conversationId] || [];
            const newMessages = prevMessages.filter(message => message.id !== id);

            return {
                ...state,
                messagesObj: {
                    ...prevMessages,
                    [conversationId]: newMessages,
                }
            };
        }

        case GET_ALL_MESSAGES_LOADING:
            return {
                ...state,
                loading: true,
            };

        case GET_ALL_MESSAGES_SUCCESS:
            return {
                ...state,
                messagesObj: action.payload,
            };

        case GET_ALL_MESSAGES_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}
