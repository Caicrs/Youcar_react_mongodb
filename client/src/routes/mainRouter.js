import React from 'react'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from '../components/Home'
import Newcar from '../components/Newcar';
import Details from '../components/Details';

const MainRouter  = () =>  {
  return(
<> 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/newcar" element={<Newcar/>} />
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/editcar/:id" element={<Newcar/>} />
            <Route path="/delete/:id" element={<Newcar/>} />
        </Routes>
     </BrowserRouter>
       
</>
  ); 
}


export default MainRouter 