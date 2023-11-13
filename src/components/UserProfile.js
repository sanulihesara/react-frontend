import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

function UserProfile() {

    return (
        <Card>
            <CardContent>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://lakeoktransport.ca/images/avataaars1.png"
                            sx={{ width: 150, height: 150 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h3'> Sandun Nawarathna </Typography>
                        <Typography variant='h5'> Expertise : HTML, C#, Processing, React </Typography>
                        <Typography > Hi my name is Sandun Nawarathna. I am a Software Developer. </Typography>

                    </Grid>
                </Grid>
                <hr></hr>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://lakeoktransport.ca/images/avataaars3.png"
                            sx={{ width: 150, height: 150 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h3'> Sahan Sulakshana Silva </Typography>
                        <Typography variant='h5'> Expertise : HTML, C#, Processing, React </Typography>
                        <Typography > Hi my name is Sahan Sulakshana Silva. I am a Software Developer. </Typography>
                    </Grid>
                </Grid>
                <hr></hr>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://lakeoktransport.ca/images/avataaars4.png"
                            sx={{ width: 150, height: 150 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h3'> Rusira Samarasekara </Typography>
                        <Typography variant='h5'> Expertise : HTML, C#, Processing, React </Typography>
                        <Typography > Hi my name is Rusira Samarasekara. I am a Software Developer. </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
export default UserProfile;