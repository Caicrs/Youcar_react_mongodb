import React from 'react'
import {Link} from "react-router-dom";
import Navbar from '../components/Navbar'
import CardContainer from '../CardContainer';
import MenuBtns from './MenuBtns'
import "../assets/styles/style.css"

const Home = () => {

    return(
       <div >
            <Navbar/>
            <Link to="/newcar"><button className='btn_add '>+ Add car</button></Link>
            <MenuBtns/>
            <CardContainer/>
        </div>
    )

}

export default Home;