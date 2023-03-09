import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import 'jquery';
import '@popperjs/core'; // Edit here
import Resume from "../../assets/AvadheshMishra_Profile.pdf";
import "bootstrap/dist/js/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function Header() {
//   return (
//     <div className="header">
//       <nav className="navbar navbar-expand-lg">
//         <NavLink className="navbar-brand" to="/" end>
//             Avadhesh Mishra
//         </NavLink> 
//         <div>
//         <ul className="nav nav-tabs ">
//             <li className="nav-item ml-3">
//                 {/*<a href="/">Home</> */}
//                 <NavLink to="/" end>Home</NavLink>
//             </li>
//             <li className="nav-item ml-3">
//                 {/*<a href="/">Home</> */}
//                 <NavLink to="/Skills" end>Skills</NavLink>
//             </li>
//             <li className="nav-item">
//                 {/*<a href="/contact">Contact</> */}
//                 <NavLink to="/contact" end>Contact</NavLink>
//             </li>
//             <li className="nav-item">
//                 {/*<a href="/projects">Projects</> */}
//                 <NavLink to="/projects" end>Projects</NavLink>
//             </li>
//             <li className="nav-item">
//                 {/*<a href="/projects">Projects</> */}
//                 <NavLink to="/about" end>About</NavLink>
//             </li>            
//         </ul>
//         </div>
//       </nav>
//   </div>
//   );
// }

// export default Header;

// let Header = () => {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-secondary bg-info navbar-style mx-0 p-2" >
//         <a className="navbar-brand" href="/#">
//           Avadhesh Mishra
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
  
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           {/* <ul className="navbar-nav navbar-right">
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link"
//                 to="/dashboard"
//                 activeClassName="active"
//               >
//                 <i className="fa fa-dashboard"></i> Dashboard
//               </NavLink>
//             </li>
//             </ul> */}
//     </div>   
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           {/* <ul className="navbar-nav navbar-right">
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link"
//                 to="/dashboard"
//                 activeClassName="active"
//               >
//                 <i className="fa fa-dashboard"></i> Dashboard
//               </NavLink>
//             </li>
//             </ul> */}
//     </div>   
//         <div className="collapse navbar-collapse align-items-right" id="navbarSupportedContent">
//           <ul className="nav navbar-nav navbar-right">      
//             <li>
//               <NavLink
//                 className="nav-link"
//                 to="/"
//                 activeClassName="active"
//                 exact={true}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className="nav-link"
//                 to="/skills"
//                 activeClassName="active"
//               >
//                 Skills
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className="nav-link"
//                 to="/projects"
//                 activeClassName="active"
//               >
//                 Projects
//               </NavLink>
//             </li>   
//             <li>
//               <NavLink
//                 className="nav-link"
//                 to="/contact"
//                 activeClassName="active"
//               >
//                 Contact Me
//               </NavLink>
//             </li>                        

//           </ul>
//         </div>
//       </nav>
//     );
//   };
  
//   export default Header;


  const Header = () => {
    return (
      <div>
         <nav className='navbar  navbar-expand-sm text-bg-dark bg-info mx-1 px-1' id="navbar-bg">
          <div className="container">
              <NavLink to="/" className='navbar-brand  fw-bold'>Avadhesh Mishra</NavLink>
  
              <button className='navbar-toggler text-light' type="button"  data-bs-target="#nav-collapse" data-bs-toggle="collapse">
                  <span className='navbar-toggler-icon  bg-light'></span>
              </button>
  
              <div className='collapse navbar-collapse justify-content-center' id="nav-collapse">
                  <ul className='navbar-nav'>
                     {/* <li className='nav-item'><Link to="/" className='nav-link  'id="menu-item">Home</Link></li> */}
                     <li>
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
                exact={false}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/skills"
                activeClassName="active"
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/about"
                activeClassName="active"
              >
                About Me
              </NavLink>
            </li>            
                     <li>
              <NavLink
                className="nav-link"
                to="/projects"
                activeClassName="active"
              >
                Projects
              </NavLink>
            </li>  
            <li class="nav-item"><a class="nav-link" href={Resume} target = "_blank" rel="noopener noreferrer">Resume</a></li> 
            <li>
              <NavLink
                className="nav-link"
                to="/contact"
                activeClassName="active"
              >
                Contact Me
              </NavLink>
            </li>  
                  </ul>
              </div>
          </div>
         </nav>
  
         
      </div>
    )
  }
  
  export default Header;