import {createSlice} from '@reduxjs/toolkit'

import type {PayloadAction} from '@reduxjs/toolkit'
import type {IdType, MessagesObjType, MessageType} from '../../typedef';


const INITIAL_STATE = {
    messagesObj: {},
    error: false,
    loading: false,
};

type State = {
    messagesObj: MessagesObjType,
    error: boolean,
    loading: boolean,
}

const messagesSlice = createSlice({
    name: 'messagesObj',
    initialState: INITIAL_STATE as State,
    reducers: {
        addMessage: (state, action: PayloadAction<{conversationId: IdType, message: MessageType}>) => {
            const {conversationId, message} = action.payload;
            const prevMessages = state.messagesObj[conversationId] || [];

            state.messagesObj[conversationId] = [...prevMessages, message];
        },
        deleteMessage: (state, action: PayloadAction<{conversationId: IdType, id: IdType}>) => {
            const {conversationId, id} = action.payload;
            const prevMessages = state.messagesObj[conversationId] || [];

            state.messagesObj[conversationId] = prevMessages.filter(message => message.id !== id);
        },
        getAllMessagesLoading: state => {
            state.loading = true;
        },
        getAllMessagesSuccess: (state, action: PayloadAction<MessagesObjType>) => {
            state.loading = false;
            state.messagesObj = action.payload;
        },
        getAllMessagesFailure: state => {
            state.loading = false;
            state.error = true;
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
