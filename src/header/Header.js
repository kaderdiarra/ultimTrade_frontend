import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { verifyTokenReq } from '../routes/route'

function Header() {
    const history = useHistory()
    const location = useLocation

    useEffect(() => {
        const asyncFunc = async () => {
            try {
                await verifyTokenReq()
            } catch (error) {
                console.log(error)
                //dispatch(accountLogout())
                history.push('/login')
            }}
        asyncFunc()
    }, [location, history])

    return (
        <div>
        </div>
    )
}

export default Header
