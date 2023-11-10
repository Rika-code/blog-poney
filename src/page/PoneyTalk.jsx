import Header from '../components/Header'
import Footer from '../components/Footer'
function PoneyTalk () { 
    const wordsbtn = ["cheval", "poulain", "jument", "shetland"]
        function handleSubmit(event) {
            let wordsclick = wordsbtn[(Math.random()*(wordsbtn.length-1)).toFixed()]
            console.log(wordsclick)
        }
    
return(
   <>
   <Header />
   <main>
    <button onClick={handleSubmit}>Clique!!!!!</button>
   </main>
   <Footer/>
   </>
)}
export default PoneyTalk