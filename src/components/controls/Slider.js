import React from 'react'
import { Slider as MuiSlider, Typography, makeStyles, Input } from '@material-ui/core'

import { AMOUNT_TYPE } from '../../constant/constants'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '7%',
        marginTop: 20
    },
    title: {
        color: '#C9CAD4',
        fontWeight: 530,
        marginRight: 20,
    },
    slider: {
        maxWidth: '58%',
        paddingRight: 20,
        marginRight: 5,
    },
    input: {
        width: 42,
        '&:before': {
            borderBottom: 'none',
        },
        '&:after': {
            borderBottom: 'none',
        },
        '&:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        }
    },
})

function Slider({setValues, values, ...other}) {
    const handleChange = (e, newValue) => {
        setValues(prev => ({
            ...prev,
            amountPercentage: newValue,
            amount: '',
            amountType: AMOUNT_TYPE.PERCENTAGE
        }))
    }

    const handleInputChange = (event) => {
        setValues(prev => ({
            ...prev,
            amountPercentage: event.target.value === '' ? 0 : Number(event.target.value),
            amount: '',
            amountType: AMOUNT_TYPE.PERCENTAGE
        }))
    }

    const handleBlur = () => {
        if (values.amountPercentage < 0) {
          setValues(prev => ({
            ...prev,
            amountPercentage: 0,
        }))
        } else if (values.amountPercentage > 100) {
            setValues(prev => ({
                ...prev,
                amountPercentage: 100,
            }))
        }
    }

    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Typography className={classes.title} id="input-slider" gutterBottom>
                percentage value :
            </Typography>
            <MuiSlider
                className={classes.slider}
                value={values.amountPercentage}
                onChange={handleChange}
                aria-labelledby="input-slider"
                valueLabelDisplay="auto"
                min={0}
                max={100}
                {...other}
            />
            <Input
                className={classes.input}
                value={values.amountPercentage}
                margin="dense"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  min: 0,
                  max: 100,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
            />
        </div>
    )
}

/**
 * sliderContainer: {
        height: 50,
        marginLeft: 20
    },
    amountPercentSlide: {
        width: '60%',
        //height: 'auto'
        '& .MuiSlider-track': {
            height: 8,
            width: '105%',
        },
        '& .MuiSlider-rail': {
            height: 8,
            width: '105%',
        },
        '& .MuiSlider-mark': {
            marginTop: 3,
            marginLeft: 4,
        },
        '& .MuiSlider-thumb': {
            height: 20,
            width: 20,
            marginTop: -6,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            "&:focus, &:hover, &$active": {
                boxShadow: "inherit"
            }
        },
        '& .MuiSlider-valueLabel': {
            marginLeft: 4,
        }
    }
 */

/**
 * <div className={classes.sliderContainer}>
                    <Slider
                        className={classes.amountPercentSlide}
                        //defaultValue={30}
                        name="amountPercentage"
                        value={values.amountPercentage}
                        onChange={handleInputChange}
                        //getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-small-steps"
                        valueLabelDisplay="auto"
                        step={5}
                        marks
                        //disabled
                        onClick={() => {
                            if (enable === AMOUNT_TYPE.QUANTITY)
                                return {disabled: true}
                            setValues(prev => ({...prev, amount: ''}))
                            return {disabled: false}
                        }}
                        min={5}
                        max={100}
                    />
                </div>
 */

export default Slider
