import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from "./Pages/About"
import Service from "./Pages/Service"
import Skills from "./Pages/Skills";

import Header from './Components/Header';

function App() {
    return (
        <Router>
            <Header />
            <div>
                {/* Wrap Route elements in a Routes component */}
                <Routes>
                    {/* Define routes using the Route component to render different page components at different paths */}
                    {/* Define a default route that will render the Home component */}
                    <Route path="/" element={<Home />} />
                    <Route  path="/about" element= {<About/>}/>
                    <Route  path="/service" element= {<Service/>}/>
                    <Route  path="/skills" element= {<Skills/>}/>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;