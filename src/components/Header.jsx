import Logo from '../images/logo_grignote_black.png'
import House from '../images/home_flat.png'

function Header() {
  return (
    <div className='header'>
      <div className="flexHrz spaBetw">
        <img src={Logo} alt="" />
        <nav>
          <li><a href="#banner"><img src={House} alt="accueil" /></a></li>
          <li><a href="#bienvenue"><p>Bienvenue !</p></a></li>
          <li><a href="#carte"><p>Carte</p></a></li>
          <li><a href="#infos"><p>Réservation & contact</p></a></li>
        </nav>
      </div>
    </div>
  )
}

export default Header
