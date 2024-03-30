import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Button from '../components/Button';



const Home = () =>{
    return(
        <div id='home'>
          <Header/>
          <Banner/>
          <Button label={"Start A Project"}/> 
        </div>
   
    )
}

export default Home