import Logo from '../images/logo_grignote_black.png'

function Header() {
  return (
    <div className='header'>

      <div className="flexHrz spaBetw">
      <img src={Logo} alt="" />
      <nav>
        <li><a href="#banner"><p>Accueil</p></a></li>
        <li><a href="/"><p>Carte</p></a></li>
        <li><a href="/"><p>Réserver</p></a></li>
      </nav>
    </div>
    </div>
  )
}

export default Header
