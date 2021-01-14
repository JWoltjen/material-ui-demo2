import React, {useState, useEffect} from 'react';
import {Grid, TextField, makeStyles, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel} from '@material-ui/core';
import Controls from '../../Components/Controls/Controls'
import {useForm, Form} from '../../Components/useForm';


const genderItems = [
    {id: 'male', title: 'Male'}, 
    {id: 'female', title: 'Female'},
    {id: 'other', title: 'Other'}
]

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
                       <Controls.input
                       name="fullName"
                       label="Full Name"
                       value={values.fullName}
                       onChange={handleInputChange}
                       />
                        <Controls.input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.RadioGroup 
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                        />
                    </Grid>
                </Grid>
            </useForm>
    )
}
