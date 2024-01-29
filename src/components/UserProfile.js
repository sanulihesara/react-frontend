import React from 'react';
import { Avatar, Card, CardContent, Grid, Typography, Paper } from '@mui/material';
import { PaidOutlined } from '@mui/icons-material';

const UserProfile = ()  => {

    const user = {
        name : 'Sanuli Hesara',
        school : 'Musaeus College, Colombo 07',
        dob : 'April 2nd, 2011',
        email : 'sanulicooray84@gmail.com',
        description : 'I am a programming enthusiast!',
        hobby : 'Listening to music',
        hometown : 'Nugegoda',
        age : '12 years old',
        phone : '0112297513',
        ambition : 'To be pilot'
    };

    return (
       <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3} style={{ marginTop : "64px"}}>
            <Paper style={{padding : 20 , textAlign : 'center' , alignItems : 'center', display : 'flex', justifyContent : 'center', flexDirection: 'column'}}>
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
                <Typography variant="subtitle1">
                    <strong>Hobby : </strong> {user.hobby}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Hometown : </strong> {user.hometown}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Age : </strong> {user.age}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Phone : </strong> {user.phone}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Ambition : </strong> {user.ambition}
                </Typography>
            </Paper>
        </Grid>


       </Grid>
    );
}
export default UserProfile;