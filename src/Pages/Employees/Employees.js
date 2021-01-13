import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../Components/PageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

function Employees() {
    return (
        <>
        <PageHeader 
          title='New Employee'
          subtitle="Form Design with Validation"
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />
        <EmployeeForm /> 
        </>
    )
}

export default Employees
