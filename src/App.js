import Home from './Home/Home.jsx';
import Nav from './NavBar/Nav.jsx'
import Footer from './Footer/Footer.jsx'
import Trending from './Home/Trending.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shops from './Shops.js'
import Contact from './Contact/Contact.jsx';
function App() {
  return (
    <Router>
      <div>
        <div className="firstpage">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shops" element={<Shops/>} />
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
          <div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
