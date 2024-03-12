import emailjs from '@emailjs/browser'

// EMAIL JS ////////

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "Ahqdv7Uj3eLYNkby8",
    });
})();
const templateId = "template_iw3fz0o";
const serviceId = "service_dhqajzz";
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Votre message a bien été envoyé, nous vous repondrons au plus vite!');
        emailjs.sendForm(serviceId, templateId, this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });

    document.getElementById('contact-form').reset();
    });
}
///////////////////////////

function Form() {
    return (
        <form id="contact-form">
        <h4>Une question ou une suggestion? Contactez nous!</h4>
        <div className="nomprenom">
          <select name="civilite">
            <option value=""></option>
            <option value="Madame">Mme</option>
            <option value="Monsieur">M</option>
          </select>
          <input type="text" name="nom" placeholder="Nom" required/>
          <input type="text"  name="prenom" placeholder="Prénom" id="prenom" required/>            
        </div>
        <input type="email" name="email" placeholder="mail@mail.com" id="mail" required/>
        <textarea name="message" id="" cols="30" rows="5" placeholder="Votre message" required></textarea>
        <input type="submit" id="submit" value="Envoyer"/>
      </form>
    )
  }
  
  export default Form
  