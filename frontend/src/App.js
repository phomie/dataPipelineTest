// src/App.js
import React, { useMemo, useState } from "react";
import axios from "./axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Parentchartcomponent from "./components/parentchartcomponent.js";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Team from './scenes/team'
// import Invoices from './scenes/invoices'
// import Contacts from './scenes/contacts'
// import Bar from './scenes/bar'
// import Form from './scenes/form'
// import Line from './scenes/line'
// import Pie from './scenes/pie'
// import FAQ from './scenes/faq'
// import Geography from './scenes/geography'
// import Calender from './scenes/calender'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team/>}/>
        {/*  <Route path="/invoices" element={<Invoices/>}/>
         <Route path="/bar" element={<Bar/>}/>
         <Route path="/form" element={<Form/>}/>
         <Route path="/line" element={<Line/>}/>
         <Route path="/pie" element={<Pie/>}/>
         <Route path="/faq" element={<FAQ/>}/>
         <Route path="/geography" element={<Geography/>}/>
         <Route path="/calender" element={<Calender/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
