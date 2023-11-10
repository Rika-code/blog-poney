import Header from "../components/Header"
import Footer from "../components/Footer"
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