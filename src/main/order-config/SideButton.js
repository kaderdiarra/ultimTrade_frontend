import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Button } from '@material-ui/core'

import { sideButtonStyle } from './style'

const useStyles = makeStyles((props) => ({...sideButtonStyle}))

function SideButton({ value, onClick, name, ...other }) {
    const classes = useStyles({selected: value})

    return (
        <div className={classes.buttonsContainer} {...other} >
            <Button
                onClick={onClick}
                className={classes.buyButton}
                value="BUY"
                name={name}
            >
                BUY
            </Button>
            <Button
                onClick={onClick}
                className={classes.sellButton}
                value="SELL"
                name={name}
            >
                SELL
            </Button>
        </div>
    )
}

SideButton.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string,
}

export default SideButton
