import { Card, CardContent, CardMedia, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const MyVillage = () => {

    const villageInfo = {
        name: "Nugegoda",
        title: "My Hometown",
        description: "The area that was originally called Nugen-Egodaha, eventually, evolved to be Nugegoda. During the time of the Kings of Kotte, the forest teemed with elephants. It had several waterways which were infested with crocodiles and in the rainy season, Nugegoda was completely flooded.",
        gallery: [
            { id: 1, imageUrl: 'https://independent-travellers.com/sri_lanka/colombo/nugegoda/p/5.jpg', caption: 'Beauty of Nugegoda' },
            { id: 2, imageUrl: 'https://independent-travellers.com/sri_lanka/colombo/nugegoda/p/9.jpg', caption: 'Welcome to Nugegoda' },
            { id: 3, imageUrl: 'https://independent-travellers.com/sri_lanka/colombo/nugegoda/p/2.jpg', caption: 'A Glance of Nugegoda' },
        ]
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper style={{ padding: 20 }}>
                    <Typography variant="h5" gutterBottom>
                        {villageInfo.title} is {villageInfo.name}
                    </Typography>
                    <Divider style={{ margin: '10px 0' }} />
                    <Typography variant="body1" >
                        {villageInfo.description}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: 20 }}>
                    <Typography variant="h5" gutterBottom>
                        Here is my location!
                    </Typography>
                    <iframe src="https://www.google.com/maps/place/Nugegoda/@6.865699,79.8318376,13z/data=!3m1!4b1!4m6!3m5!1s0x3ae25a7a9577b535:0x62e4b0a7bd678e33!8m2!3d6.8649081!4d79.8996789!16zL20vMDNwczUw?entry=ttu" width="400" height="300" allowfullscreen="" loading="lazy" ></iframe>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Image Gallery
                </Typography>
                <Grid container spacing={2}>
                    {villageInfo.gallery.map((image) => (
                        <Grid item xs={12} sm={6} md={4} key={image.id}>
                            <Card>
                                <CardMedia component="img" height="140" image={image.imageUrl} alt={image.caption} />
                                <CardContent>
                                    <Typography variant="caption" color="textSecondary">
                                        {image.caption}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>
    );
};

export default MyVillage;