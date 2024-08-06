import search from "./../assets/images/search.svg"
import profile from "./../assets/images/profile.svg"
import home from "./../assets/images/home.svg"

type NavbarProps = {
    activePage: 'home' | 'search' | 'profile' | ''
}

const Navbar: React.FC<NavbarProps> = ({ activePage }) => {
    return(
        <nav>
            <ul>
                <li>
                    <img src={home} className={activePage == "home" ? "active" : ""} alt="home"></img>
                </li>
                <li>
                    <img src={search} className={activePage == "search" ? "active" : ""} alt="search"></img>
                </li>
                <li>
                    <img src={profile} className={activePage == "profile" ? "active" : ""} alt="profile"></img>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar}