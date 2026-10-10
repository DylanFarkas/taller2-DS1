import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
})

export const getCategories = async () => {
    return await api.get('categories/');
}

export const getProduct = async (id) => {
    return await api.get(`products/${id}/`);
}

export const getProducts = async () => {
    return await api.get('products/');
}

export const createProduct = async (product) => {
    return await api.post('products/', product);
}

export const updateProduct = async (id, product) => {
    return await api.put(`products/${id}/`, product);
}

export const deleteProduct = async (id) => {
    return await api.delete(`products/${id}/`);
}