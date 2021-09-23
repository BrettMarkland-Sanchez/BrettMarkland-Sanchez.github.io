import './reset.css';
import './materialize.css'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
        <Header/>
        <Nav/>
        <div className="main">
            <Projects/>
            <Contact/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;