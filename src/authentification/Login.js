/*import React, { useState } from 'react'
import { accountLoginReq } from '../routes/route'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, Paper, Avatar, Typography, makeStyles, InputAdornment, IconButton } from '@material-ui/core'

import { accountLogin } from '../redux/account'
import Controls from '../components/controls/Controls'
import { useForm, Form } from '../components/useForm'
import {valideEmail, validePassword} from '../utils/validateForm'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { verifyTokenReq } from '../routes/route'

const useStyles = makeStyles({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 500,
        minHeight: 300,
        padding: 50,
        justifyContent: 'space-between'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 210,
    },
    header: {
        alignSelf: 'center',
    }
})

function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [displayPassword, setDisplayPassword] = useState(false)

    const handleSubmit = async ({ e, values, validate }) => {
        e.preventDefault()
        if (!validate())
            return
        try {
            window.localStorage.removeItem('token')
            const result = await accountLoginReq({ email: values.email, password: values.password, })
            dispatch(accountLogin({ user: result.data.user, token: result.data.token }))
            const verif = await verifyTokenReq()
            if (verif)
                history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const {values, errors, setErrors, handleInputChange} = useForm({
        email: '',
        password: '',
    })

    const validate = () => {
        let temp = {}
        temp.email = valideEmail(values.email)
        temp.password = validePassword(values.password)
        setErrors({...temp})

        return (Object.values(temp).every(elem => elem === ""))
    }

    const classes = useStyles()
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
                <div className={classes.header}>
                    <Avatar
                        alt="login avatar"
                        src="https://images.pexels.com/photos/7817773/pexels-photo-7817773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                    <Typography>Login</Typography>
                </div>
                <Form className={classes.form} onSubmit={(e) => handleSubmit({e, values, validate})} id="login-form-id">
                    <Controls.Input
                        name="email"
                        label="Email"
                        required
                        fullWidth
                        autoComplete="email"
                        autoFocus
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        name="password"
                        label="Password"
                        required
                        fullWidth
                        type={displayPassword ? "text" : "password"}
                        autoComplete="current-password"
                        value={values.password}
                        onChange={handleInputChange}
                        error={errors.password}
                        InputProps={
                            {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setDisplayPassword((prev => !prev))}>
                                            {displayPassword ? <MdVisibility /> : <MdVisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }
                        }
                    />
                    <Controls.Button
                        text="Submit"
                        type="submit"
                        fullWidth
                        form="login-form-id"
                    />
                </Form>
            </Paper>
        </Container>
    )
}

export default Login
*/

import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import LargeScreenLogin from './LargeScreenLogin';
import SmallScreenLogin from './SmallScreenLogin';


function Login() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    console.log('matches: ', matches)
    return (
        <div>
            {
                matches ? <LargeScreenLogin /> : <SmallScreenLogin />
            }
        </div>
    )
}

export default Login