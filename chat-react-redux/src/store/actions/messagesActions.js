export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const addMessage = (text, isCurrentUser, conversationId) => ({
    type: ADD_MESSAGE,
    payload: {text, isCurrentUser, conversationId}
})
export const deleteMessage = (id, conversationId) => ({type: DELETE_MESSAGE, payload: {id, conversationId}})
