import React from 'react'
import PropTypes from 'prop-types'
import {Select as MuiSelect} from '@material-ui/core'
import { makeStyles, FormControl } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }))


function Select({ selectTitle=null, onChange, children, value, ...other}) {
    const classes = useStyles();

    return (
        <FormControl variant="outlined" className={classes.formControl}>
          <MuiSelect
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={value}
            onChange={onChange}
            label={selectTitle}
            {...other}
          >
              {children}
          </MuiSelect>
      </FormControl>
    )
}

Select.propTypes = {
    selectTitle: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Select
