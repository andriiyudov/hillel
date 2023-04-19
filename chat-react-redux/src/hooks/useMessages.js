import {useCallback} from 'react';
import axios from 'axios';
import {URL} from '../components/constants';
import {
    addMessage,
    deleteMessage as deleteMessageAction,
    getAllMessagesLoading,
    getAllMessagesSuccess,
    getAllMessagesFailure
} from '../store/reducers/messagesReducer';


export const useMessages = () => {
    const getMessages = useCallback(() => dispatch => {
        dispatch(getAllMessagesLoading());
        axios.get(`${URL}/messages`)
            .then(response => dispatch(getAllMessagesSuccess(response.data)))
            .catch(error => dispatch(getAllMessagesFailure(error)));
    }, []);

    const saveMessage = useCallback((message, conversationId) => dispatch => {
        axios.post(`${URL}/messages`, {message: {...message, id: crypto.randomUUID()}, conversationId})
            .then(res => {
                if (res.status === 200) {
                    dispatch(addMessage({message, conversationId}));
                }
            })
    }, []);

    const deleteMessage = useCallback((id, conversationId) => dispatch => {
        axios.post(`${URL}/messages/delete`, {id, conversationId})
            .then(res => {
                if (res.status === 200) {
                    dispatch(deleteMessageAction({id, conversationId}));
                }
            })
    }, []);

    return {
        getMessages,
        saveMessage,
        deleteMessage
    };
}
