import Header from "./Header"
import Footer from "./Footer"
function Contact () {
    return (
        <>
        <Header/>
        <div className="contactdiv">
            <h1> Contactez-nous!</h1>
            <p> Votre nom :</p>
            <p> Votre prénom :</p>
            <p> Ecrivez votre message : </p>
        </div>
        <Footer/>
        </>
    )
}
export default Contact