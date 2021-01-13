import React, {useState, useEffect} from 'react';
import {Grid, TextField, makeStyles, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel} from '@material-ui/core';
import {useForm, Form} from '../../Components/useForm';
import Input from '../../Components/Controls/Input'

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
                       <Input  
                       name="fullName"
                       label="Full Name"
                       value={values.fullName}
                       onChange={handleInputChange}
                       />
                        <Input
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
