import styled from '@emotion/styled';
import { Avatar, Card, CardContent, Grid, Paper, Slide, Typography } from '@mui/material';
import React, { useState } from 'react';

const AnimatedCard = styled(Card)`
  transition : transform 0.3s ease-in-out;
  &:hover{
    transform : scale(1.05);
    background-color: #d775d5;
  }
  cursor : pointer;
  background-color: #efb7ee;
`;

function AboutMe(){
    const [expanded, setExpanded] = useState(false);

    const handleCardClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Grid container spacing={3} justifyContent="center" alignItems="center" alignContent="center">
            <Grid item>
            <Paper elevation={3} style={{backgroundColor : 'rgb(171 53 152)', padding : '20px' , margin: '20px', textAlign : 'center'}} >
                <Typography variant="h4" style={{color : '#fff'}}>
                    About Myself
                </Typography>
            </Paper>
                <Slide direction="right" in={true} timeout={5}>
                    <AnimatedCard onClick={handleCardClick} 
                    style={{transform: expanded ? 'scale(1.25)' : 'scale(1)' }}>
                        <CardContent>
                            <Avatar alt="My Avatar"
                            src="https://img.myloview.pl/fototapety/lofi-anime-boy-wearing-headphones-in-city-created-using-generative-ai-technology-700-376042556.jpg"
                            sx={{width: 80, height: 80, marginBottom : 2}} />
                            <Typography variant="h6" gutterBottom>
                                Hello My Friends! Welcome to my Web App! My name is Sanuli Hesara.
                            </Typography>
                            <Typography>
                                I am an enthusiastic Programmer. I hereby welcome you to my React Web Application.
                                I am 12 years old. i like to be a great pilot in the future. My hobby is to play with my pets.
                                I have a younger brother and I live in Nugegoda. As another hobby I like to listen to music in my free time.
                                I am Badminton player in my school.
                            </Typography>
                        </CardContent>
                    </AnimatedCard>
                </Slide>
            </Grid>

            <Grid item>

            <Paper elevation={3} style={{backgroundColor : '#3498DB', padding : '20px' , margin: '20px', textAlign : 'center'}} >
                <Typography variant="h4" style={{color : '#fff'}}>
                    Here Are List Of My Friends
                </Typography>
            </Paper>
            <Card style={{backgroundColor : "#aecce5"}}>
            <CardContent>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://cdn.imgchest.com/files/myd5czpol54.png"
                            sx={{ width: 60, height: 60 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h6'> Mahelie Nulathma </Typography>
                        <Typography> Hobbies : She likes to play with her pets. She likes to be around animals so that she could study their behaviour. It is because she wants to become a great veterinarian one day. </Typography>
                        <Typography> Hi my name is Mahelie Nulathma. I am a Tabele Tennis player. </Typography>

                    </Grid>
                </Grid>
                <hr></hr>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://cdn.imgchest.com/files/pyq9c5m8mo4.png"
                            sx={{ width: 60, height: 60 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h6'> Methmi Nehansa </Typography>
                        <Typography > Hobbies : She love to dance to music. She love animals as much as I do. She likes to be a doctor in the future. </Typography>
                        <Typography > Hi my name is Methmi Nehansa. I am an Athlete. </Typography>
                    </Grid>
                </Grid>
                <hr></hr>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://cdn.imgchest.com/files/w7w6cm5pony.png"
                            sx={{ width: 60, height: 60 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h6'> Mindi Viyara </Typography>
                        <Typography > Hobbies : She like to listen to music while petting her pets. She like to watch cricket matches with her father. She wants to be a Navy Officer one day in the future. </Typography>
                        <Typography > Hi my name is Mindi Viyara. I am a Swimmer. </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </Grid>

        </Grid>
    );

}

export default AboutMe;