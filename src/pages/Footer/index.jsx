import React from "react";
import "./style.css";
import Resume from "../../assets/AvadheshMishra_Profile.pdf";

function Footer() {
  return (
     
    <footer className="footer mx-1">
        <ul class="nav nav-pills nav-fill bg-dark">
          <li class="nav-item"><a class="nav-link" href="mailto:avadhesh.cs@gmail.com">Email: avadhesh.cs@gmail.com</a></li>
          <li class="nav-item"><div class="nav-link"> Phone#: 555/435-2345</div></li>
          <li class="nav-item"><a class="nav-link" href="https://www.linkedin.com/in/mishraavadhesh" target = "_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li class="nav-item"><a class="nav-link" href="https://github.com/avi202020" target = "_blank" rel="noopener noreferrer">GitHub</a></li>
          <li class="nav-item"><a class="nav-link" href={Resume} target = "_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>    
    </footer>
     
  );
}

export default Footer;