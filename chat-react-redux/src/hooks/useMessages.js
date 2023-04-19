import {useCallback} from 'react';
import axios from 'axios';
import {URL} from '../components/constants';
import {
    addMessage,
    GET_ALL_MESSAGES_FAILURE,
    GET_ALL_MESSAGES_LOADING,
    setMessages
} from '../store/actions/messagesActions';


export const useMessages = () => {
    const getMessages = useCallback(() => dispatch => {
        dispatch({type: GET_ALL_MESSAGES_LOADING});
        axios.get(`${URL}/messages`)
            .then(response => dispatch(setMessages(response.data)))
            .catch(error => dispatch({type: GET_ALL_MESSAGES_FAILURE, payload: error}));
    }, []);

    const saveMessage = useCallback((message, conversationId) => dispatch => {
        axios.post(`${URL}/messages`, {message: {...message, id: crypto.randomUUID()}, conversationId})
            .then(res => {
                if (res.status === 200) {
                    dispatch(addMessage(message, conversationId));
                }
            })
    }, []);

    const deleteMessage = useCallback((id, conversationId) => dispatch => {
        axios.delete(`${URL}/messages`, {
            method: 'POST',
            body: JSON.stringify({id, conversationId}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (res.status === 200) {
                    dispatch(deleteMessage(id, conversationId));
                }
            })
    }, []);

    return {
        getMessages,
        saveMessage,
        deleteMessage
    };
}
