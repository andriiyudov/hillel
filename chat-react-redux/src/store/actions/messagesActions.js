export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const GET_ALL_MESSAGES_LOADING = 'GET_ALL_MESSAGES_LOADING';
export const GET_ALL_MESSAGES_SUCCESS = 'GET_ALL_MESSAGES_SUCCESS';
export const GET_ALL_MESSAGES_FAILURE = 'GET_ALL_MESSAGES_FAILURE';

export const addMessage = (message, conversationId) => ({
    type: ADD_MESSAGE,
    payload: {message, conversationId}
})
export const deleteMessage = (id, conversationId) => ({type: DELETE_MESSAGE, payload: {id, conversationId}})
export const setMessages = messages => ({type: GET_ALL_MESSAGES_SUCCESS, payload: messages})
