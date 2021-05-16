import { createSlice } from '@reduxjs/toolkit'

const accountSlice = createSlice({
    name: 'account',
    initialState: {},
    reducers: {
        accountLogin: (state, action) => {
            state = { ...action.payload?.user }
            window.localStorage.setItem('token', action.payload.token)
            return state
        },
        accountLogout: (state, action) => {
            window.localStorage.removeItem('token')
        }
    }
})

export const { accountLogin, accountLogout} = accountSlice.actions
export default accountSlice.reducer