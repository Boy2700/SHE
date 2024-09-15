import React from 'react';
import { Box, Card, CardContent, Avatar, Typography } from '@mui/joy'; 

export default function MediaCover() {
  return (
  
    <Box component="ul"
         sx={{ display: 'flex',marginTop:3, gap: 6, }}>
      <Card sx={{ width: 406, padding: 1, height:200 }}>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ backgroundColor: 'white', padding: 1, marginRight: 0.2 }}>
              <Avatar alt="Travis Howard" src="https://i.pravatar.cc/300?img=3" />
            </Box>
            <Box>
              <Typography textColor="black" sx={{ fontSize: '0.975rem' }}>
                Olivia Jane
              </Typography>
              <Typography variant="caption" gutterBottom sx={{ display: 'block', fontSize: '0.55rem' }}>
                Certified Nurse
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography textColor="black" sx={{ fontSize: '1rem' }}>
            Lorem ipsum dolor sit amet consectetur. Etiam leo tincidunt diam tempor eu. Tempus blandit laoreet a enim. Lorem ipsum dolor sit amet consectetur. Etiam leo tincidunt diam tempor eu. Tempus blandit laoreet a enim.
              </Typography>
            </Box>
        </CardContent>
      </Card>

      <Card sx={{ width: 406, padding: 1 }}>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ backgroundColor: 'white', padding: 1, marginRight: 0.2 }}>
              <Avatar alt="Travis Howard" src="https://i.pravatar.cc/300?img=3" />
            </Box>
            <Box>
              <Typography textColor="black" sx={{ fontSize: '0.975rem' }}>
                Olivia Jane
              </Typography>
              <Typography variant="caption" gutterBottom sx={{ display: 'block', fontSize: '0.55rem' }}>
                Certified Nurse
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography textColor="black" sx={{ fontSize: '0.975rem' }}>
            Lorem ipsum dolor sit amet consectetur. Etiam leo tincidunt diam tempor eu. Tempus blandit laoreet a enim. Lorem ipsum dolor sit amet consectetur. Etiam leo tincidunt diam tempor eu. Tempus blandit laoreet a enim.
              </Typography>
            </Box>
        </CardContent>
      </Card><Card sx={{ width: 406, padding: 1 }}>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ backgroundColor: 'white', padding: 1, marginRight: 0.2 }}>
              <Avatar alt="Travis Howard" src="https://i.pravatar.cc/300?img=3" />
            </Box>
            <Box>
              <Typography textColor="black" sx={{ fontSize: '0.975rem' }}>
                Olivia Jane
              </Typography>
              <Typography variant="caption" gutterBottom sx={{ display: 'block', fontSize: '0.55rem' }}>
                Certified Nurse
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography textColor="black" sx={{ fontSize: '0.975rem' }}>
            Lorem ipsum dolor sit amet consectetur. Etiam leo tincidunt diam tempor eu. Tempus blandit laoreet a enim. Lorem ipsum dolor sit amet consectetur. Etiam leo tincidunt diam tempor eu. Tempus blandit laoreet a enim.
              </Typography>
            </Box>
        </CardContent>
      </Card>
    </Box>
    
  );
}
