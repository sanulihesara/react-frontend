import styled from '@emotion/styled';
import { Avatar, Card, CardContent, Grid, Slide, Typography } from '@mui/material';
import React, { useState } from 'react';

const AnimatedCard = styled(Card)`
  transition : transform 0.3s ease-in-out;
  &:hover{
    transform : scale(1.05);
  }
  cursor : pointer;
`;

function AboutMe(){
    const [expanded, setExpanded] = useState(false);

    const handleCardClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item>
                <Slide direction="right" in={true} timeout={5}>
                    <AnimatedCard onClick={handleCardClick} 
                    style={{transform: expanded ? 'scale(1.25)' : 'scale(1)' }}>
                        <CardContent>
                            <Avatar alt="My Avatar"
                            src="https://lakeoktransport.ca/images/avataaars4.png"
                            sx={{width: 80, height: 80, marginBottom : 2}} />
                            <Typography variant="h6" gutterBottom>
                                Hello My Friends! Welcome to my Web App!
                            </Typography>
                            <Typography>
                                I am an enthusiastic Programmer. I hereby welcome you to my React Web Application. 
                            </Typography>
                        </CardContent>
                    </AnimatedCard>
                </Slide>
            </Grid>

        </Grid>
    );

}

export default AboutMe;