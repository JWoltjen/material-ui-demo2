import React, {useState, useEffect} from 'react';
import {Grid, TextField, makeStyles, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel} from '@material-ui/core';
import {useForm, Form} from '../../Components/useForm';

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

export default function EmployeeForm() {

    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialValues); 

  
    return (
            <useForm> 
                <Grid container >
                    <Grid item xs={6}>
                        <TextField
                        variant="outlined"
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                        />
                        <TextField
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                                <RadioGroup>
                                    <FormControlLabel value="male" control={<Radio/>} label="Male" /> 
                                     <FormControlLabel value="female" control={<Radio/>} label="Female" /> 
                                      <FormControlLabel value="other" control={<Radio/>} label="Other" /> 
                                </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </useForm>
    )
}
