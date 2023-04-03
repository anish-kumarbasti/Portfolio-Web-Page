import './App.css';
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useContext } from 'react';
import { themeContext } from './Context';
// import Popup from './Components/Popup/Popup'


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <Navbar />
      <Intro />
      < Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      {/* <Popup /> */}
    </div>
  );
}

export default App;


