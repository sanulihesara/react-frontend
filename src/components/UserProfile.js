import { Avatar, Card, CardContent, Grid } from '@mui/material';
import React from 'react';


function UserProfile() {

    return (
        <Card>
            <CardContent>
            <Grid item>
            <Avatar
                alt="My Username"
                src="https://lakeoktransport.ca/images/avataaars1.png"
                sx={{ width: 150, height: 150 }}
            />
            </Grid>
            </CardContent>
        </Card>
    );

}

export default UserProfile;