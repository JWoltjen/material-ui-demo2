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
    return (
            <form className={classes.root}>
                <Grid container >
                    <Grid item xs={6}>
                        <TextField
                        variant="outlined"
                        label="full name"
                        value={values.fullName}
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
