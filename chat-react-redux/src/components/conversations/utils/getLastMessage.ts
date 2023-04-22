import type {MessageType} from '../../../typedef';

type GetLastMessage = (messages: MessageType[] | undefined) => MessageType | undefined;

export const getLastMessage: GetLastMessage = messages => (
    messages ? messages[messages.length - 1] : messages
)
