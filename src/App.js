import './SASS/App.scss'
import Aboutme from './Components/Aboutme';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';


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
