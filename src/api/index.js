import { callApi } from "./config"

export const login = (formData) => callApi({
    url: '/login',
    method: 'POST',
    data: formData
})

export const register = (formData) => callApi({
    url: '/register',
    method: 'POST',
    data: formData
})

export const getUser = () => callApi({
    url: '/users/authenticated',
})