import React from 'react'
import {Button as MuiButton} from '@material-ui/core'
function Button(props) {

    const { text, size, color, variant, onClick} = props
    return (
        <MuiButton 
        variant={variant}
        size={size}
        color={color}
        onclick={onclick}>
            {text}
        </MuiButton>
    )
}

export default Button
