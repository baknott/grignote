import React from 'react'
import Banner from '../images/banner.jpg'
import Header from '../components/Header'
import Carte from '../components/Carte'
import LogoBlanc from '../images/logo_grignote_white.png'

function Home() {

  return (
    <div>
      <Header/>
      <div  className='banner'>
        <img src={Banner} alt="salle du restaurant" id="banner"/>
        <div className='title_banner'>
          <h1> Brasserie • Restaurant • Lounge Bar</h1>
          <img src={LogoBlanc} alt="logo grignote"/>
          <h2 text-decoration="overline" >Paris</h2>
        </div>

        <Carte/>
      </div>




    </div>
  )
}

export default Home
