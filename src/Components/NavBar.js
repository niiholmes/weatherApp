import React from 'react'



const NavBar = () =>{
    return(

        <div>
            <div className="navigation-container">
                
                <div className='home'><strong>UBUNTU</strong><sup> WeatherApp</sup></div>
                <div className='about'><strong>about</strong></div>
                <div className='enter'><strong>logIn</strong></div>
                <div className='register'><strong>signUp</strong></div>
            </div>
        </div>
    )
}


export default NavBar