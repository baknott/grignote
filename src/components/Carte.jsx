function Carte() {
  return (
    <div className="bloc_carte" id="carte">
        <h2>• Carte du moment •</h2>
        <div className='carte'>
        <div className="service">
            <h3>• Entrées •</h3>
            <p className="plat">Pizza balls</p>
            <i>Escargot, Mozzarella et Beurre Maître d'Hôtel</i>
            <p>~</p>
            <p className="plat">Salade Inspiration Thaï</p>
            <i>(Attention c'est épicé !)</i>
            <p>~</p>
            <p className="plat">Arrancinis</p>
            <i>Bouchées de risotto fourrées au ragù bolognese</i>
        </div>
        <div className="service">
            <h3>• Plats •</h3>
            <p className="plat">Filet de canard & pommes de terre sarladaises</p>
            <p>~</p>
            <p className="plat">Katsukarē (Curry Japonais)</p>
            <i>Porc mariné pané au panko, petits légumes dans un curry nappant accompagnés riz</i>
            <p>~</p>
            <p className="plat">Pappardelle Bolognese</p>
        </div>
        <div className="service">
            <h3>• Desserts •</h3>
            <p className="plat">Crème brulée</p>
            <p>~</p>
            <p className="plat">Tiramisu</p>
            <p>~</p>
            <p className="plat">Sorbet Artisanal</p>
            <i>Citron ou Pomme</i>
        </div>
    </div>
    </div>
  )
}

export default Carte
