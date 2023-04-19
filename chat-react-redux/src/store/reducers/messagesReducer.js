import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    messagesObj: {},
    error: false,
    loading: false,
};

const messagesSlice = createSlice({
    name: 'messagesObj',
    initialState: INITIAL_STATE,
    reducers: {
        addMessage: (state, action) => {
            const {conversationId, message} = action.payload;
            const prevMessages = state.messagesObj[conversationId] || [];

            state.messagesObj[conversationId] = [...prevMessages, {id: crypto.randomUUID(), ...message}];
        },
        deleteMessage: (state, action) => {
            const {conversationId, id} = action.payload;
            const prevMessages = state.messagesObj[conversationId] || [];

            state.messagesObj = prevMessages.filter(message => message.id !== id);
        },
        getAllMessagesLoading: state => {
            state.loading = true;
        },
        getAllMessagesSuccess: (state, action) => {
            state.loading = false;
            state.messagesObj = action.payload;
        },
        getAllMessagesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

const {reducer, actions} = messagesSlice;

export {reducer as messagesReducer};

export const {
    addMessage,
    deleteMessage,
    getAllMessagesLoading,
    getAllMessagesSuccess,
    getAllMessagesFailure,
} = actions;
