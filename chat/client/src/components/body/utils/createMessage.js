let id = -1;

export const createMessage = (text, isCurrentUser = true) => ({
    id: `id-${++id}`, text, isCurrentUser,
});
