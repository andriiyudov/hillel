import {MESSAGES_TO_REPLY} from '../constants';
import type {MessageType} from '../../../typedef';

type GetRandomMessage = () => MessageType;
export const getRandomMessage: GetRandomMessage = () => {
    const index = Math.floor(Math.random() * MESSAGES_TO_REPLY.length);

    return MESSAGES_TO_REPLY[index];
};
