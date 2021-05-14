import React from 'react'
import { IconButton, makeStyles, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: (props) => ({
        backgroundColor: '#383A47',
        height: props.height,
        borderRadius: '4px 4px 0px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 20px 0px 20px'
    }),
    icon: props => ({
        fontSize: props.iconSize,
        color: '#C9CAD4',
    }),
    text: props => ({
        color: '#C9CAD4',
        fontSize: props.textSize,
        fontWeight: 600
    })
})

function ComponentHeader({ compoStyles, title, icon, handleClickClear }) {
    const classes = useStyles(compoStyles)

    return (
        <Paper className={classes.root} elevation={0} >
            <Typography className={classes.text}>{title}</Typography>
            <IconButton className={classes.icon} onClick={handleClickClear}>
                {icon}
            </IconButton>
        </Paper>
    )
}

export default ComponentHeader
