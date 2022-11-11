import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import JobsList from './pages/JobsList';
import JobDetails from './pages/JobDetails';

function App() {

  return (
    <>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<JobsList/>}/>
    <Route path=':id' element={<JobDetails/>}/>
    </Route>
   </Routes>
    </>
  );
}

export default App;
