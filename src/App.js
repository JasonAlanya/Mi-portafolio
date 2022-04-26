import './SASS/App.scss'
import Aboutme from './Components/Aboutme/Aboutme';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
