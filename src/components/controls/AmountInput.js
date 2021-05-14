import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormHelperText, TextField, InputAdornment } from '@material-ui/core'

import { AMOUNT_TYPE } from '../../constant/constants'

function AmountInput({ name, values, setValues, error=null, ...other }) {
  const handleChange = (e) => {
    setValues(prev => ({
      ...prev,
      amount: e.target.value,
      amountType: AMOUNT_TYPE.QUANTITY,
      amountPercentage: 0,
    }))
  }

    return (
          <TextField
            name={name}
            label={error === '' ? null : error}
            variant="outlined"
            size="small"
            value={values.amount}
            onChange={handleChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">$ USDT</InputAdornment>
            }}
            {...(error && {error: true})}
            {...other}
          />
    )
}

AmountInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default AmountInput
