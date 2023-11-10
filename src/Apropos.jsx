import Header from './Header'
import Footer from './Footer'
function Apropos () {
    const infos = {
        author: "Poney Man",
        published: "01/01/2021",
        address: "12 rue du canasson, cheval-sur-mer",
      };
    return (
        <>
        <Header />
        <div className="aproposdiv">
            <h2>A propos :</h2>
            <p> {infos.author}</p>
            <p> {infos.published}</p>
            <p> {infos.address}</p>
        </div>
        <Footer/>
        </>
    )
}
export default Apropos