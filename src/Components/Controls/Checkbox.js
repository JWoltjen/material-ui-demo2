import React from 'react'
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core'

function Checkbox(props) {
    const {name, label, value, onChange } = props; 

    const convertToDefaultPara = (name, value) => ({
        target: {
            name, value
        }
    })
    return (
    <FormControl>
        <FormControlLabel
            control={<MuiCheckbox 
                name={name}
                color="primary"
                checked={value}
                onChange={ e => onChange(convertToDefaultPara(name, e.target.checked))}
                />}
                label={label}
                />
    </FormControl>
    )
} 

export default Checkbox