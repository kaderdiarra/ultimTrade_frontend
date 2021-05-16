import { createSlice } from '@reduxjs/toolkit'

const accountSlice = createSlice({
    name: 'account',
    initialState: {},
    reducers: {
        accountLogin: (state, action) => {
            console.log('payload:', action.payload)
            state = { ...action.payload?.user }
            document.cookie = `token=${action.payload.token}`
            return state
        },
        accountLogout: (state, action) => {
            window.localStorage.clear()
        }
    }
})

export const { accountLogin, accountLogout} = accountSlice.actions
export default accountSlice.reducer