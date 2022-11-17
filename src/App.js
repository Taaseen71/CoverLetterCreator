
import './App.css';
import React, { useState, useEffect } from 'react';
import 'react-datasheet/lib/react-datasheet.css';
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import Body from "./Body"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  
  const [background, setBackground] = useState({
    backgroundColor: 'white',
    color: 'black',
    darkMode: 'off'
  })
  
  const darkTheme = createTheme({
    palette: {
      mode: (background.backgroundColor === 'white' ? 'light' : 'dark'),
    },
  });

  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.body1,
    color: background.color,
    backgroundColor: background.backgroundColor,
    padding: theme.spacing(10),
  }));
  

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode')
    if (!darkMode) {
      alert('This website saves a variable to localStorage to decide weather to provide you with dark mode or light mode. You wont recieve this message again.')
      localStorage.setItem('darkMode', JSON.stringify(background))
    }
    else {
      setBackground(JSON.parse(darkMode))
    }
  }, [])

  


  const setBackgroundColor = () => {
    let changedBackground;
    if (background.darkMode === 'on') {
      changedBackground = {
        backgroundColor: 'white',
        color: 'black',
        darkMode: 'off'
      }
      localStorage.setItem('darkMode', JSON.stringify(changedBackground))
      setBackground(changedBackground)
    }
    else {
      changedBackground = {
        backgroundColor: '#1f1b1b',
        color: 'white',
        darkMode: 'on'
      }
      localStorage.setItem('darkMode', JSON.stringify(changedBackground))
      setBackground(changedBackground)
    }
  }


  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Box sx={{ width: '100%', maxWidth: 2500, margin: '0 auto' }}>
        <Div
          className="fullPage"
          style={{ color: background.color, backgroundColor: background.backgroundColor }}
          >
          <Body background={background} setBackgroundColor={setBackgroundColor}/>

        </Div>
      </Box>
    </ThemeProvider>
  );

}

export default App;
