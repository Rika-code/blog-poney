import { Link } from "react-router-dom";

function Header () {
    return (
        <header className="header">    
        <img src ="https://e7.pngegg.com/pngimages/403/178/png-clipart-shetland-pony-mustang-pack-animal-stallion-mustang-horse-mare.png" className="headerImg"></img>
        <h1 className="headerh1"> Le blog des poneys trop mimi!</h1>
        <nav className="navbarheader">
            <ul className="headerul1">
                <li>
                 <Link to ="/">Home</Link>
                </li>
                <li>
                <Link to ="/poneys">Poneys </Link>
                </li>
                <li>
                <Link to ="/contact">Contact </Link>
                </li>
                <li>
                <Link to ="/apropos">A Propos</Link>
                </li>

                <li>
                    <Link to ="/talk">Pony Talk</Link>
                </li>
            </ul>
        </nav>
</header>   
)
}

export default Header