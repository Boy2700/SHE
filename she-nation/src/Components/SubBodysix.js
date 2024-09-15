import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';


export default function MediaCover() {
  return (
    <Box component="ul" sx={{ marginLeft:20,marginRight:20 }} >
        
      <Card component="li"  sx={{height:400,minWidth:100 }}>

        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
       
      </Card>
    </Box>
  );
}
