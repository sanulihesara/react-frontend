import { Card, CardContent, CardMedia, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const MyVillage = () => {

    const villageInfo = {
        name: "Dehiwala",
        title: "My Hometown",
        description: "Dehiwala-Mount Lavinia (Sinhala: දෙහිවල-ගල්කිස්ස, romanized: Dehivala-Galkissa; Tamil: தெஹிவளை-கல்கிசை, romanized: Tehivaḷai-Kalkicai), population 245,974 (2012), is a large municipality in Sri lanka, and covers an extent of 2,109 ha (5,210 acres). It lies south of the Colombo Municipal Council area and separated from it by the Dehiwala canal which forms the northern boundary of DMMC. Its southern limits lie in Borupana Road and the eastern boundary is Weras Ganga with its canal system and including some areas to its east (Pepiliyana, Gangodawila and Kohuwala). This town has extensive population and rapid industrialisation and urbanization in recent years. It is home to Sri Lanka's National Zoological Gardens, which remains one of Asia's largest. Colombo South Teaching Hospital, Kalubowila and Colombo Airport, Ratmalana are some important landmark in this area. Dehiwela-Mount Lavinia and Sri Jayawardenapura Kotte being two large suburban centres of the city of Colombo function together as one large urban agglomeration in the Region (Western Province). The overspill from the City in residential and commercial uses of land have rapidly urbanised these suburban centers. Dehiwela-Mount Lavinia and Sri Jayawardenpaura along with Colombo Municipal Council form the most urbanised part of the core area of the Colombo Metropolitan Region. Dehiwala and Mount Lavinia lie along the Galle Road artery, which runs along the coast to the south of the country.",
        gallery: [
            { id: 1, imageUrl: 'https://www.discover.lk/assets/Dehiwala-Zoological-Garden2.jpg', caption: 'Beauty of Dehiwala' },
            { id: 2, imageUrl: 'https://i.ytimg.com/vi/E5WoVTAjcSs/maxresdefault.jpg', caption: 'Welcome to Dehiwala' },
            { id: 3, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sri_Lanka_%28560056969%29.jpg/800px-Sri_Lanka_%28560056969%29.jpg', caption: 'A Glance of Dehiwala' },
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63383.18112512491!2d79.83774567915762!3d6.836669472582263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a8d6ec1f8c3%3A0x47810f3e7d084753!2sDehiwala-Mount%20Lavinia!5e0!3m2!1sen!2slk!4v1704726674169!5m2!1sen!2slk" width="400" height="300" allowfullscreen="" loading="lazy" ></iframe>
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