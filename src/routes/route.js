import axios from 'axios'

const axiosInstance = axios.create({ baseURL: 'http://localhost:5000',})

axiosInstance.interceptors.request.use((req) => {
    const token = window.localStorage.getItem('token')
    if (token) {
        req.headers.authorization = `Bearer ${token}`
    }
    return req
})

/**
 * @summary User routes
 */

export const getUsersReq = () => axiosInstance.get('/client')
export const deleteUserReq = (id) => axiosInstance.delete(`/client/delete/${id}`)
export const createUserReq = (payload) => axiosInstance.post('/client/create', {...payload})
export const searchClientReq = (toSearch) => axiosInstance.get('/client/search', { params: {toSearch} })
export const updateUserReq = (_id, payload) => axiosInstance.patch(`/client/update/${_id}`, {...payload})

/**
 * @summary History routes
 */

export const getHistoryReq = () => axiosInstance.get('/history')
export const deleteHistoryReq = (_id) => axiosInstance.delete(`/history/delete/${_id}`)
export const clearHistoryReq = () => axiosInstance.delete('/history/clearHistory')

/**
 * @summary Account routes
 */

export const accountLoginReq = (payload) => axiosInstance.post('/user/login', {...payload})
export const verifyTokenReq = () => axiosInstance.get('/user/verifyToken')


/**
 * @summary Trading routes
 */

export const tradingOrderReq = (payload) => axiosInstance.post('/trade', {...payload})