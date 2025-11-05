import axios from "axios";

const api = axios.create({
    baseURL: "https://6738a9b34eb22e24fca89864.mockapi.io"
})

export const apiPost = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export default api