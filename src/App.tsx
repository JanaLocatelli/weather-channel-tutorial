import styled from '@emotion/styled';
import { AppBar, CssBaseline, Icon, Typography } from '@mui/material';
import { Box, height, width } from '@mui/system';
import React from 'react';
import AppBody from './AppBody';
import TextInput from './TextInput';
import { Storm } from '@mui/icons-material';

const AppBox = styled(Box)(({ theme }) => ({
  height: '100%',
  marginTop: '80px'
}));

function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar title='Wheather Channel'>
        <Box sx={{ margin: 2, display:'flex'}}>
          <Icon>
            <Storm></Storm>
          </Icon>
          <Typography variant="h6" sx={{marginLeft: 1}}>
            Wheather Channel
          </Typography>
        </Box>
      </AppBar>

      <AppBox>
        <AppBody/>
      </AppBox>
    </React.Fragment>
  );
}

export default App;
