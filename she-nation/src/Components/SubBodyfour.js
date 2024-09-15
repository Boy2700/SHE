import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Avatar } from '@mui/material'; 
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

export default function MediaCover() {
  return (
    <Box component="ul"
         sx={{ display: 'flex', gap: 6, flexWrap: 'wrap', p: 0, m: 0, marginLeft:5,marginRight:5 }}>
             <Box>
                      <Box>
                      <Card component="li" sx={{ minWidth: 280, height:261, flexGrow: 1 }}>
                        <CardCover>
                          <video autoPlay loop muted
                            poster="https://assets.codepen.io/6093409/river.jpg"
                          >
                            <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"
                            />
                          </video>
                        </CardCover>
                      </Card>
                      </Box>
     <Card sx={{ minWidth: 280, padding: 1 }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Box sx={{ backgroundColor: 'white', padding: 1, marginRight: 0.2 }}>
            <Avatar alt="Travis Howard" src="https://i.pravatar.cc/300?img=1" />
          </Box>
          <Box sx={{ backgroundColor: 'white'}}>
          <Typography textColor="black" sx={{ fontSize: '0.975rem' }}>
              Olivia Jane
            </Typography>
            <Typography variant="caption" gutterBottom sx={{ display: 'block', fontSize: '0.55rem' }}> 
        Certified Nurse
      </Typography>

          </Box>
        </Box>
      </CardContent>
    </Card>
       </Box>


       <Box>
                      <Box>
                      <Card component="li" sx={{ minWidth: 280, height:261, flexGrow: 1 }}>
                        <CardCover>
                          <video autoPlay loop muted
                            poster="https://assets.codepen.io/6093409/river.jpg"
                          >
                            <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"
                            />
                          </video>
                        </CardCover>
                      </Card>
                      </Box>

                      <Card sx={{ minWidth:280, padding: 1 }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Box sx={{ backgroundColor: 'white', padding: 1, marginRight: 0.2 }}>
            <Avatar alt="Travis Howard" src="https://i.pravatar.cc/300?img=5" />
          </Box>
          <Box sx={{ backgroundColor: 'white'}}>
          <Typography textColor="black" sx={{ fontSize: '0.975rem' }}>
          Sophie Elias
            </Typography>
            <Typography variant="caption" gutterBottom sx={{ display: 'block', fontSize: '0.55rem' }}> 
            CEO, Chi clothings
      </Typography>

          </Box>
        </Box>
      </CardContent>
    </Card>
       </Box>
     
       <Box>
                      <Box>
                      <Card component="li" sx={{ minWidth: 306, height:261, flexGrow: 1 }}>
                        <CardCover>
                          <video autoPlay loop muted
                            poster="https://assets.codepen.io/6093409/river.jpg"
                          >
                            <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"
                            />
                          </video>
                        </CardCover>
                      </Card>
                      </Box>

    <Card sx={{ minWidth: 280, padding: 1 }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Box sx={{ backgroundColor: 'white', padding: 1, marginRight: 0.2 }}>
            <Avatar alt="Travis Howard" src="https://i.pravatar.cc/300?img=7" />
          </Box>
          <Box sx={{ backgroundColor: 'white'}}>
          <Typography textColor="black" sx={{ fontSize: '0.975rem' }}>
              Olivia Jane
            </Typography>
            <Typography variant="caption" gutterBottom sx={{ display: 'block', fontSize: '0.55rem' }}> 
        Certified Nurse
      </Typography>

          </Box>
        </Box>
      </CardContent>
    </Card>
       </Box>


       <Box sx={{ marginTop: 15 }}>
  <Card sx={{ minWidth: 280, padding: 1 }}>
    <CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {/* Avatar */}
        <Box sx={{ backgroundColor: 'white', padding: 1, marginRight: 1 }}>
          <Avatar alt="Travis Howard" src="https://i.pravatar.cc/300?img=6" />
        </Box>

        {/* Text and Play Button in a Flexbox */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%', // Ensures the play button aligns to the right
            padding: 1,
            backgroundColor: 'white',
            borderRadius: 1,
          }}
        >
          {/* Text Content */}
          <Box>
            <Typography textColor="black" sx={{ fontSize: '0.975rem' }}>
              Olivia Jane
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: 'block', fontSize: '0.55rem' }}
            >
              Certified Nurse
            </Typography>
          </Box>

          {/* Play Button */}
          <Box>
            <PlayCircleFilledIcon sx={{ fontSize: '2rem', color: 'black' }} />
       


          </Box>
        </Box>
      </Box>
    </CardContent>
  </Card>
</Box>







    </Box>
  );
}
