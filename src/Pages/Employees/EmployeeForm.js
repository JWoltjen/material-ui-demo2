import React, {useState, useEffect} from 'react';
import {Grid, TextField, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

const initialValues = {
    id: 0, 
    fullName: '',
    email: '',
    mobile: '',
    city: '', 
    gender: 'male', 
    departmentId: '', 
    hireDate: new Date(),
    isPermanent: false,
}

function EmployeeForm() {

    const [values, setValues] = useState(initialValues)
    const classes = useStyles(); 
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
          [name]: value  
        })
    }
    return (
            <form className={classes.root}>
                <Grid container >
                    <Grid item xs={6}>
                        <TextField
                        variant="outlined"
                        label="full name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                        />
                        <TextField
                        variant="outlined"
                        label="email"
                        value={values.email}
                        />
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
            </form>
    )
}

export default EmployeeForm
