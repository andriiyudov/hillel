import {MESSAGES_TO_REPLY} from '../constants';

export const getRandomMessage = () => {
    const index = Math.floor(Math.random() * MESSAGES_TO_REPLY.length);

    return MESSAGES_TO_REPLY[index];
};

