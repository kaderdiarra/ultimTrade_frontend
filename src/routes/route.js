import axios from 'axios'

//const axiosInstance = axios.create({ baseURL: 'http://localhost:3000', /*withCredentials: true */})

/**
 * @summary User routes
 */

export const getUsersReq = () => axios.get('/client')
export const deleteUserReq = (id) => axios.delete(`/client/delete/${id}`)
export const createUserReq = (payload) => axios.post('/client/create', {...payload})
export const searchClientReq = (toSearch) => axios.get('/client/search', { params: {toSearch} })
export const updateUserReq = (_id, payload) => axios.patch(`/client/update/${_id}`, {...payload})

/**
 * @summary History routes
 */

export const getHistoryReq = () => axios.get('/history')
export const deleteHistoryReq = (_id) => axios.delete(`/history/delete/${_id}`)
export const clearHistoryReq = () => axios.delete('/history/clearHistory')

/**
 * @summary Account routes
 */

export const accountLoginReq = (payload) => axios.post('/user/login', {...payload})
export const verifyTokenReq = () => axios.get('/user/verifyToken')


/**
 * @summary Trading routes
 */

export const tradingOrderReq = (payload) => axios.post('/trade', {...payload})