export const getMessage = (messages, text, isCurrentUser = true) => {
    const prevId = messages[messages.length - 1]?.id;
    const prevIdNumber = +prevId?.match(/\d+/)?.[0] || -1;
    const id = prevIdNumber < 0 ? prevIdNumber - 1 : prevIdNumber + 1;

    return {text, isCurrentUser, id: `id-${id}`};
};
