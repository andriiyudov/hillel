export type IdType = number | string;

export type ContactType = {
    id: IdType,
    name: string,
    avatarUrl?: string,
}

export type MessageType = {
    id: IdType,
    isCurrentUser: boolean,
    text: string,
}

export type MessagesObjType = {
    [key: string]: MessageType[],
}
