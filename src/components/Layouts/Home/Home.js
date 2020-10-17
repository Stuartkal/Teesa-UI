import React from 'react'
import Navbar from '../../Routes/Navbar/Navbar'
import Card from './Card'
import Bill from './Bill'

import './home.scss'
const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="home-main">
            <div className="profile-div">
                <div className="profile-bg"/>
                <div className="profile-content">
                    <img src="https://picsum.photos/200" className="avatar"/>
                    <div className="profile-details">
                    <h4>John Doe</h4>
                    <p>johndoe@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="home-container">
                <h2>Bills</h2>
                <Bill/>
                <Bill/>
                <Bill/>
                <Bill/>
                
            </div>
            <div className="side-bar">
                <div className="search">
                    <input type="text" placeholder="Search MPs"/>
                </div>
                    
                    <Card name="Robert Kyagulanyi"/>
                    <Card name="Rebecca Kadaga"/>
                    <Card name="Matia Kasaija"/>
                    <Card name="Judith Nabakooba"/>
                    
            </div>
        </div>
        </div>
    )
}

export default Home
