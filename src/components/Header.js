import { NavLink } from "react-router-dom";

function Header() {
    return <>
       <nav className='navbar  navbar-expand-sm' id="navbar-bg">
        <div className="container">
            <Link to="/" className='navbar-brand  fw-bold'>LOGO</Link>

            <button className='navbar-toggler text-light' type="button"  data-bs-target="#nav-collapse" data-bs-toggle="collapse">
                <span className='navbar-toggler-icon  bg-light'></span>
            </button>

            <div className='collapse navbar-collapse justify-content-center' id="nav-collapse">
                <ul className='navbar-nav'>
                   <li className='nav-item'><NavLink to="/" className='nav-link  'id="menu-item">Home</NavLink></li>
                   <li className='nav-item'><NavLink to="/about" className='nav-link 'id="menu-item">About</NavLink></li>
                   <li className='nav-item'><NavLink to="/service" className='nav-link 'id="menu-item">Service</NavLink></li>
                   <li className='nav-item'><NavLink to="/skills" className='nav-link 'id="menu-item">Skills</NavLink></li>
                   
                   <li className='nav-item'><NavLink to="/project" className='nav-link 'id="menu-item">Projects</NavLink></li>
                   <li className='nav-item'><NavLink to="/contact" className='nav-link 'id="menu-item">Contact us</NavLink></li>
                </ul>
            </div>
        </div>
       </nav>

    </>
}

export default Header;