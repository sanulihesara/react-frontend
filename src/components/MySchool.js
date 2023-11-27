import { Card, CardContent, CardMedia, Grid, Slider, Typography } from '@mui/material';
import React, { useState } from 'react';

const schoolImages = [
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Pataskala_Elementary_School.jpg",
    "https://images6.fanpop.com/image/photos/36800000/School-image-school-36812026-3888-2592.jpg",
    "https://cdnassets.hw.net/b6/7d/95e393ff4c8296702e5e63979e3e/40b17d69b0b2434486fc7f485d3f44fc.jpg"
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