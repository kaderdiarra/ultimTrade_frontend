import React from 'react'
import { makeStyles } from '@mui/styles';

import LoginHeaderSection from './LoginHeaderSection';

const useStyles = makeStyles({
    container: {
        // backgroundColor: 'red',
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    bottomSection: {
        backgroundColor: 'orange',
        height: '50%',
    },
})

function SmallScreenLogin() {
    const classes = useStyles()
  return (
    <div className={classes.container}>
        <LoginHeaderSection />
        <div className={classes.bottomSection}>Bottom</div>
    </div>
  )
}

export default SmallScreenLogin