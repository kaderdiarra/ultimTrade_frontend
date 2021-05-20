import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Paper } from '@material-ui/core'

import { getHistoryAsync } from '../../redux/history'
import { tradingOrderReq } from '../../routes/route'
import { AMOUNT_TYPE } from '../../constant/constants'
import Controls from '../../components/controls/Controls'
import SideButton from './SideButton'
import { Form, useForm } from '../../components/useForm'
import { valideSymbol, valideSide, valideAmount, valideType } from '../../utils/validateForm'
import OrderInputsComponent from './OrderInputsComponent'
import SubmitTradeButton from './SubmitTradeButton'
import { useStyles } from './style'

function OrderConfigContent() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const clientsId = useSelector((state) => state.selectedUsers)
    const { values, setValues, errors, setErrors, handleInputChange } = useForm({
        symbol: '',
        type: '',
        amount: '',
        amountPercentage: 0,
        amountType: AMOUNT_TYPE.QUANTITY,
        side: '',
    })

    const handleSubmit = async (e, validate, values) => {
        e.preventDefault()
        if (!validate()) {
            console.log('FORM ERROR')
            return
        }
        try {
            const determineQuoteOrderQty = (values.amountType === AMOUNT_TYPE.PERCENTAGE ? '0' : values.amount)
            const result = await tradingOrderReq({
                clientsId: [...clientsId],
                symbol: values.symbol,
                type: values.type,
                quoteOrderQty: determineQuoteOrderQty,
                side: values.side,
                amountPercentage: values.amountPercentage,
                amountType: values.amountType,
            })
            console.log(result.data)
            // dispatch to history
            dispatch(getHistoryAsync())
        } catch (error) {
            console.log(error)
        }
    }

    const validate = () => {
        const temp = {}
        temp.symbol = valideSymbol(values.symbol)
        temp.type = valideType(values.type)
        temp.amount = valideAmount(values.amount, values.amountType)
        temp.side = valideSide(values.side)

        setErrors({...temp})
        return (Object.values(temp).every(elem => elem === ""))
    }

    console.log('amount type:', values.amountType)
    return (
        <Paper className={classes.root}>
            <Form onSubmit={(e) => handleSubmit(e, validate, values)} className={classes.form} id="order-configuration-form" >
                <SideButton
                    value={values.side}
                    onClick={(e) => {
                        const { name, value } = e.currentTarget
                        setValues({...values, [name]: value })
                     }}
                    name="side"
                    //className={classes.sideButton}
                />
                <OrderInputsComponent
                    handleInputChange={handleInputChange}
                    values={values}
                    setValues={setValues}
                    errorAmount={errors.amount}
                />
                <Controls.Slider
                    setValues={setValues}
                    values={values}
                />
                <SubmitTradeButton
                    buttonStyle={classes.tradeButton}
                />
            </Form>
        </Paper>
    )
}

export default OrderConfigContent
