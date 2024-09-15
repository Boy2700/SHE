import React from 'react';
import { Box } from '@mui/joy';

function DottedLineWithBullets() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '15px 0', }} >

      <Box sx={{display: 'flex', alignItems: 'center', }}>
        <Box sx={{width: '8px',height: '8px', borderRadius: '50%', backgroundColor: '#0002', margin: '0 3px' }}/>
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center', }}>
        <Box sx={{width: '8px',height: '8px', borderRadius: '50%', backgroundColor: '#0023', margin: '0 3px' }}/>
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center', }}>
        <Box sx={{width: '8px',height: '8px', borderRadius: '50%', backgroundColor: 'black', margin: '0 3px' }}/>
      </Box>

      <Box sx={{display: 'flex', alignItems: 'center', }}>
        <Box sx={{width: '8px',height: '8px', borderRadius: '50%', backgroundColor: '#0002', margin: '0 3px' }}/>
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center', }}>
        <Box sx={{width: '8px',height: '8px', borderRadius: '50%', backgroundColor: 'black', margin: '0 3px' }}/>
      </Box> <Box sx={{display: 'flex', alignItems: 'center', }}>
        <Box sx={{width: '8px',height: '8px', borderRadius: '50%', backgroundColor: '#0003', margin: '0 3px' }}/>
      </Box> <Box sx={{display: 'flex', alignItems: 'center', }}>
        <Box sx={{width: '8px',height: '8px', borderRadius: '50%', backgroundColor: 'black', margin: '0 3px' }}/>
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center', }}>
        <Box sx={{width: '8px',height: '8px', borderRadius: '50%', backgroundColor: '#0001', margin: '0 3px' }}/>
      </Box>

    </Box>
  );
}

export default DottedLineWithBullets;
