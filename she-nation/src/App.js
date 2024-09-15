import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material'; 
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import SubBodyone from  './Components/SubBodyone';
import SubBar from './Components/SubBar';
import SubBodyTwo from './Components/SubBodytwo';
import SubBar2 from './Components/SubBar2';
import SubBodythree from './Components/SubBodythree';
import SubBar3 from './Components/SubBar3';
import SubBodyfour from './Components/SubBodyfour';
import SubBar4 from './Components/SubBar4';
import SubBodyfive from './Components/SubBodyfive'; 
import SubBodysix from './Components/SubBodysix'; 
import SubBar5 from './Components/SubBar5'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box>
        <Body />
      </Box>
      <Box
      sx={{ backgroundImage: `url('/b11.jpg')`,  backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat',width: '100%', height: '100vh', 
      }}
    >
      <SubBodyone />
    </Box>
    <Box>
      <SubBar/>
    </Box>
      <Box>
        <SubBodyTwo />
      </Box>

      <Box sx={{marginLeft:5, marginRight:5}}>
      <Box>
      <SubBar2/>
    </Box>
    <Box>
      <SubBodythree/>
    </Box>
      </Box>
    <Box>
      <SubBar3/>
    </Box>
    <Box sx={{marginTop:15}}>
      <SubBodyfour/>
    </Box>
    <Box marginTop={10}>
      <SubBar4/>
    </Box>
    <Box sx={{marginTop:5, justifyContent:'center'}}>
      <SubBodyfive/>
    </Box>
    <Box sx={{marginTop:5, justifyContent:'center'}}>
      <SubBodyfive/>
    </Box>  <Box sx={{marginTop:5, justifyContent:'center'}}>
      <SubBodyfive/>
    </Box>
    <Box sx={{marginLeft:5, marginRight:5}}>
      <Box>
      <SubBar5/>
    </Box>
    </Box>
    <Box sx={{marginTop:5, justifyContent:'center'}}>
      <SubBodysix/>
    </Box>
    
    </Router>
  );
};
export default App;
