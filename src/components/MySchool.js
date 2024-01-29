import { Card, CardContent, CardMedia, Grid, Slider, Typography } from '@mui/material';
import React, { useState } from 'react';

const schoolImages = [
    "https://cdn.imgchest.com/files/w7w6cm5pony.png",
    "https://www.musaeus.lk/wp-content/gallery/main-banner/musaeus-banner1_0.jpg",
    "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.dailymirror.lk/assets/uploads/image_ad875c356c.jpg"
];
function MySchool(){
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    }
    return ( 
   <Grid container spacing={3} justifyContent="center" alignItems="center">
    <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h4" gutterBottom></Typography>
        <Slider value={sliderValue} onChange={handleSliderChange} min={0} max={schoolImages.length-1} step={1}
        marks valueLabelDisplay='auto' valueLabelFormat={(value)=> value+1} />
        <Card>
            <CardMedia component="img" alt={"School"} height="400" image={schoolImages[sliderValue]} />
            <CardContent>
                <Typography>School Details</Typography>
            </CardContent>
        </Card>
    </Grid>
   </Grid>
    );
}
export default MySchool;