
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import { useSelector } from 'react-redux'

const Home = () => {
    
    // const user= useSelector(state => state.user.currentUser);
    // const navigate = useNavigate();
    // if(!user){
    //     navigate("/login");
    // }

    return (
        <div>
           <Announcement/>             
           <Navbar/>
           <Slider/>
           <Categories/>
           <Products/>
           <Newsletter/>
           <Footer/>
        </div>
    )
}

export default Home
