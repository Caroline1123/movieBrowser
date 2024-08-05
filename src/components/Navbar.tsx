import search from "./../assets/images/search.svg"
import profile from "./../assets/images/profile.svg"
import home from "./../assets/images/home.svg"

const Navbar = ({ activePage }) => {
    return(
        <nav>
            <ul>
                <li>
                    <img src={home} className={activePage == "home" ? "active" : ""}></img>
                </li>
                <li>
                    <img src={search} className={activePage == "search" ? "active" : ""}></img>
                </li>
                <li>
                    <img src={profile} className={activePage == "profile" ? "active" : ""}></img>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar}