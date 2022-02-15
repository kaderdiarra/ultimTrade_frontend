import React from 'react'
import { makeStyles } from '@mui/styles';

import passwordSvg from '../assets/images/undraw_my_password_d-6-kg.svg'
import ultimTradeLogo from '../assets/images/ultimTradeLogo.svg'

const useStyles = makeStyles({
    topSection: {
        background: 'linear-gradient(180.03deg, #297CEB 0.03%, rgba(9, 30, 58, 0.2) 80%)',
        height: '50%',
        display: 'flex',
        flexDirection: 'column'
    },
    bgImageContainer: {
        position: 'inherit',
        width: '100%',
        height: '75%',
        // backgroundColor: 'red',
    },
    svgContainer: {
        position: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'flex-start',
        // backgroundColor: 'green',
    },
    passwordSvg: {
        width: '70%',
        height: 'auto',
        objectFit: 'contain',
        // backgroundColor: 'yellow',
    },
    logoContainer: {
        position: 'inherit',
        width: '50%',
        height: '25%',
        alignSelf: 'flex-end',
        // backgroundColor: 'red',
    },
    logoContainer2: {
        display: 'flex',
        paddingTop: '1.5rem',
        justifyContent: 'center',
        // backgroundColor: 'orange',
    },
    ultimTradeLogo: {
        position: 'inherit',
        width: '15%',
        height: 'auto',
        objectFit: 'contain',
        alignSelf: 'center',
        marginLeft: '0.6rem',
        // backgroundColor: 'yellow',
    },
    ultimTradeLogoText: {
        alignSelf: 'center',
        fontSize: '1.5rem',
        marginLeft: '0.4rem',
        // backgroundColor: 'white',
    }

})

function LoginHeaderSection() {
    const classes = useStyles()
    return (
        <div className={classes.topSection}>
            <div className={classes.logoContainer}>
                <div className={classes.logoContainer2}>
                    <img className={classes.ultimTradeLogo} alt='ultimTrade logo' src={ultimTradeLogo} />
                    <h3 className={classes.ultimTradeLogoText}>UltimTrade</h3>
                </div>
            </div>
            <div className={classes.bgImageContainer}>
                <div className={classes.svgContainer}>
                    <img className={classes.passwordSvg} alt='password svg' src={passwordSvg} />
                </div>
            </div>
        </div>
    )
}

export default LoginHeaderSection