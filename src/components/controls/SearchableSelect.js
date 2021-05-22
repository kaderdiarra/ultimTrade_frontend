import React from 'react'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete'
import { TextField } from '@material-ui/core'

const filterOptions = createFilterOptions({
    matchFrom: 'start',
})

function SearchableSelect({ options, setValues }) {
    const handleChange = (e, newValue) => {
        setValues(prev => ({
            ...prev,
            symbol: {...newValue}
        }))
    }

    return (
        <Autocomplete
            id="symbol-searching-select"
            options={options}
            freeSolo
            filterOptions={filterOptions}
            onChange={handleChange}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            size="small"
            renderInput={(params) => <TextField {...params} label="Pair" variant="outlined" />}
        />
    )
}

export default SearchableSelect
