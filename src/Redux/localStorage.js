export const loadData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const saveData = (key , data ) => {
    localStorage.setItem(key,JSON.stringify(data))
}

export const deleteData = (key) => {
    localStorage.removeItem(key);
}
