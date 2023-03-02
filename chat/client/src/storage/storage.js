export const Storage = {
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    removeItems(keys) {
        if (Array.isArray(keys)) {
            keys.forEach(key => localStorage.removeItem(key));
        }
        localStorage.removeItem(keys);
    },
};
