export const getPostIdValidErrorMessage = postId => {
    const isPostIdNumber = typeof +postId === 'number';
    const idPostIdInRange = isPostIdNumber && postId >= 1 && postId <= 100

    if (postId === '') {
        return null;
    }

    if (!isPostIdNumber) {
        return 'Post id must be number';
    } else if (!idPostIdInRange) {
        return 'The number must be in range: 1 to 100';
    }

    return null;
}
