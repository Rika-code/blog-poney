import Header from '../components/Header'
import Footer from "../components/Footer"
function Poneys () {
    const poneys = [
        {
          id: 1,
          name: "Noisette",
          color: "red",
          age: 2,
          isMagic: true,
          img : "https://cdn.ehorses.media/image/blur/big/poneys-shetland-jument-7ans-110-cm-alezan-chevaux-elevage-chevaux-de-loisir-attelage-stroebeck_f4f74d56-b2c8-4073-b929-f24821bfb8c2.jpg",
        },
        {
          id: 2,
          name: "Poly",
          color: "blue",
          age: 3,
          isMagic: false,
          img : "https://www.la-spa.fr/app/assets-spa/uploads/2021/10/poney-deskop-1.jpg",
        }, 
        {
          id: 3,
          name: "Smarties",
          color: "green",
          age: 4,
          isMagic: true,
          img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_oZKyOmaV9ohqReoD2TOvM-InwCp4bbe4oxaFNQnegsjrEIl4DBXvP1n0OyrH9D6Jgw&usqp=CAU",
        },
        {
          id: 4,
          name: "Pépito",
          color: "yellow",
          age: 5,
          isMagic: false,
          img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0xYzKdez4eyV1lr4oyF8oQgUn4XOhYjRCg&usqp=CAU",
        },
        {
          id: 5,
          name: "Petit Tonnerre",
          color: "purple",
          age: 6,
          isMagic: true,
          img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS598euTdO7I0oKSEpezmajv0swIW8Dhoipw&usqp=CAU",
        },
        {
          id: 6,
          name: "Obane",
          color: "pink",
          age: 7,
          isMagic: false,
          img : "https://www.hippologie.fr/rep-des-images/etalon-poney-shetland-au-modele,raceDeChevaux,207,image1,fr1384705018,H400.jpg",
        },
        {
          id: 7,
          name: "Surprise",
          color: "black",
          age: 8,
          isMagic: true,
          img : "https://thumbs.dreamstime.com/b/mini-poney-d-%C3%AEles-shetland-12-ann%C3%A9es-d-%C3%A9talon-23327315.jpg",
        },
        {
          id: 8,
          name: "Victoire",
          color: "white",
          age: 9,
          isMagic: false,
          img : "https://static.wixstatic.com/media/578074_ce2d89e8c9884a619cb00fefc2985eec~mv2.jpg/v1/fill/w_552,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Resized_received_766540504105168.jpg",
        },
        {
          id: 9,
          name: "Caramel",
          color: "brown",
          age: 10,
          isMagic: true,
          img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfeusf5s0AMVnK94IZLdQWKzL_oytT0CgbTg&usqp=CAU" ,
        },
        {
          id: 10,
          name: "Alto",
          color: "grey",
          age: 11,
          isMagic: false,
          img : "https://i.pinimg.com/originals/49/8f/72/498f72f67f9c69565bfb13203a25da0e.jpg",
        },
      ];
 return (
    <main className="poneysOrigin">
        <Header/>
        {poneys.map((poneys) => {
            return (
                <>
                <article>
                    <h2 >{poneys.name}</h2>
                    <p>couleur : {poneys.color}</p>
                    <p>age : {poneys.age}</p>
                    <p ><img src={poneys.img} alt = "" className='poneysImg'></img></p>
                </article>
                
                </>
            )

        })}
        <Footer/>
        
        </main>


)}
export default Poneys