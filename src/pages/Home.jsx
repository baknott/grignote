import React from 'react'
import Banner from '../images/banner.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carte from '../components/Carte'
import LogoBlanc from '../images/logo_grignote_white.png'
import Fork from '../images/fork.jpg'
import Tripadvisor from '../images/tripadvisor.png'
import Plat from '../images/plat_ai.png'
import Form from '../components/Form'
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
      </div>
      <div id='bienvenue'> 
        <div id='bienvenue_txt'>
          <h2>Bienvenue !</h2>
          <p>
          Chez <strong>Grignote</strong>, nous célébrons la richesse des saveurs artisanales, 
          en mettant en lumière des ingrédients locaux soigneusement sélectionnés pour leur qualité et leur provenance.
          </p>
          <p>
          Notre chef vous propose ainsi le meilleur de maîtrise culinaire au travers de plats inspirés du monde entier.
          Une carte certes courte mais dans laquelle chacun saura y trouver son compte !
          </p>
        </div>
        <img src={Plat} alt="salade thai" />
      </div>
      <Carte/>
      <div id='infos'>
          <div>
            <p>18 rue des artisans, 75025 Paris</p>
            <p>Ouvert du Lundi au Dimanche : 11:30-14h et 18:30-22:30</p>
            <p><u>Tél :</u> 01 02 03 04 05</p>
            <div id='reseaux'>
              <u>Réserver en ligne :</u>
              <a href="https://www.thefork.com"><img src={Fork} alt="reserver sur the fork" /></a>
              <a href="https://www.tripadvisor.com"><img src={Tripadvisor} alt="reserver sur tripadvisor" /></a>
            </div>
          </div>
          <Form/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
