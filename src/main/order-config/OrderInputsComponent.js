import React from 'react'
import { makeStyles, Typography, MenuItem } from '@material-ui/core'

import Controls from '../../components/controls/Controls'
import { SYMBOLS, TYPES } from '../../constant/constants'

const useStyles = makeStyles({
    inputsContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '7%',
        marginTop: 15
    },
    title: {
        color: '#C9CAD4',
        fontWeight: 530,
    },
    inputsComponent: {
        height: '2%'
    },
    selectPaire: {
        height: 35,
        left: '32%',
    },
    selectTypes: {
        height: 35,
        left: '70%'
    },
    amountInput: {
        left: '18%',
        maxWidth: 150
    }
})

function OrderInputsComponent({ handleInputChange, values, setValues, errorAmount }) {
    const classes = useStyles()

    return (
        <>
            <div className={classes.inputsContainer}>
                <Typography className={classes.title}>Trading Pair :</Typography>
                <Controls.Select
                    //className={classes.inputsComponent}
                    selectTitle="Pair"
                    onChange={handleInputChange}
                    name="symbol"
                    value={values.symbol}
                    className={classes.selectPaire}
                >
                    {
                        [...SYMBOLS].map((item, index) => {
                              return <MenuItem key={`key-${item.base}-${index}`} id={`select-${item.base}`} value={item}>{`${item.base}${item.quote}`}</MenuItem>
                        })
                    }
                </Controls.Select>
            </div>
            <div className={classes.inputsContainer}>
                <Typography className={classes.title}>Types :</Typography>
                <Controls.Select
                    selectTitle="Type"
                    onChange={handleInputChange}
                    name="type"
                    value={values.type}
                    className={classes.selectTypes}
                >
                    {
                        [...TYPES].map((item, index) => {
                            return <MenuItem key={`key-${item}-${index}`} id={`select-${item}`} value={item}>{item}</MenuItem>
                        })
                    }
                </Controls.Select>
            </div>
            <div className={classes.inputsContainer}>
                <Typography className={classes.title}>Amount :</Typography>
                <Controls.AmountInput
                    name="amount"
                    values={values}
                    setValues={setValues}
                    error={errorAmount}
                    className={classes.amountInput}
                />
            </div>
        </>
    )
}

export default OrderInputsComponent
