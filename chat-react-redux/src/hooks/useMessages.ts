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
import {useDispatch} from 'react-redux';
import type {IdType, MessageType} from '../typedef';


export const useMessages = () => {
    const dispatch = useDispatch();

    const getMessages = useCallback(() => {
        dispatch(getAllMessagesLoading());
        axios.get(`${URL}/messages`)
            .then(response => dispatch(getAllMessagesSuccess(response.data)))
            .catch(error => dispatch(getAllMessagesFailure(error)));
    }, [dispatch]);

    const saveMessage = useCallback((message: MessageType, conversationId: IdType) => {
        axios.post(`${URL}/messages`, {message: {...message, id: crypto.randomUUID()}, conversationId})
            .then(res => {
                if (res.status === 200) {
                    dispatch(addMessage({message, conversationId}));
                }
            })
    }, [dispatch]);

    const deleteMessage = useCallback((id: IdType, conversationId: IdType) => {
        axios.post(`${URL}/messages/delete`, {id, conversationId})
            .then(res => {
                if (res.status === 200) {
                    dispatch(deleteMessageAction({id, conversationId}));
                }
            })
    }, [dispatch]);

    return {
        getMessages,
        saveMessage,
        deleteMessage
    };
}
