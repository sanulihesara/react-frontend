import React from 'react';
import { Avatar, Card, CardContent, Grid, Typography, Paper } from '@mui/material';
import { PaidOutlined } from '@mui/icons-material';

const UserProfile = ()  => {

    const user = {
        name : 'Tharindu Nanayakkara',
        school : 'Central College, Colombo',
        dob : 'January 3rd, 2009',
        email : 'tharindu@gmail.com',
        description : 'I am a programming enthusiast!'
    };

    return (
       <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
            <Paper style={{padding : 20 , textAlign : 'center' , alignItems : 'center'}}>
                <Avatar 
                alt="My Image"
                src="https://lakeoktransport.ca/images/avataaars3.png"
                sx={{width : 120 , height : 120}} />
                <Typography variant="subtitle1">
                    {user.name}
                </Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9} style={{ marginTop : "64px"}}>
            <Paper style={{ padding : 20 }}>
                <Typography variant="subtitle1">
                    <strong>School : </strong> {user.school}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Date of Birth : </strong> {user.dob}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Email : </strong> {user.email}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Description : </strong> {user.description}
                </Typography>
            </Paper>
        </Grid>


       </Grid>
    );
}
export default UserProfile;