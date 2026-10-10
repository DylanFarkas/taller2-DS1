import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
})

export const getUser = async (id) => {
    return await api.get(`users/${id}/`)
}

export const getUsers = async () => {
    return await api.get('users/')
}

export const createUser = async (user) => {
    return await api.post('users/', user)
}

export const updateUser = async (id, user) => {
    return await api.put(`users/${id}/`, user);
}

export const deleteUser = async (id) => {
    return await api.delete(`users/${id}/`)
}