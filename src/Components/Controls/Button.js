import React from 'react'
import { makeStyles, Button as MuiButton} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(.5)
    }, 
    label: {
        textTransform: "none"
    }
}))
function Button(props) {

    const { text, size, color, variant, onClick, ...other} = props
    const classes = useStyles(); 

    return (
        <MuiButton 
        variant={variant || 'contained' }
        size={size || "large" }
        color={color || "primary"}
        onclick={onclick}
        {...other}
        classes={{root:classes.root, label:classes.label}}
        >
            {text}
        </MuiButton>
    )
}

export default Button
