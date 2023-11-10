import Header from "../components/Header"
import Footer from "../components/Footer"
function Contact () {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('Votre formulaire a été soumis!');
      }
  return (
        <>
        <Header/>
        <div className="contactdiv">
                <h2>Formulaire de Contact</h2>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li className='contactForm'>
                        <label for="name">Nom&nbsp;:</label>
                        <input type="text" id="name" name="user_name" />
                        </li>
                        <li className='contactForm'>
                        <label for="name">Prénom&nbsp;:</label>
                        <input type="text" id="name" name="user_name" />
                        </li>
                        <li className='contactForm'>
                        <label for="msg">Message&nbsp;:</label>
                        <textarea id="msg" name="user_message"></textarea>
                        </li>
                        <div class="button" className='contactForm'>
                        <button type="submit">Envoyer le message</button>
                        </div>
                    </ul>
                </form>
        </div>
    
        <Footer/>
        </>
    )}
    

export default Contact