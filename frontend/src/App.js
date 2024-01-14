// src/App.js
import React, { useMemo } from 'react';
import axios from "./axios";
import Topbar from './scenes/global/Topbar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Parentchartcomponent from "./components/parentchartcomponent.js"
import "./App.css";
import {ColorModeContext,useMode} from './theme'
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
  const [theme,colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="content">
         <Topbar/>
      </div>
    </div>
</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;