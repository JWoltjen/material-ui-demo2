import React from 'react'
import { Paper, Card } from '@material-ui/core'

function PageHeader(props) {

    const {title, subtitle, icon} = props
    return (
        <Paper elevation={0} square>
            <div>
                <Card>
                    {icon}
                </Card>
            </div>
        </Paper>
    )
}

export default PageHeader
