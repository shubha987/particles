import './App.module.css';
import Content from './components/content';
import Glow from './components/glow';
import ParticlesComponent from './components/particles';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <Glow/>
      <Content/> 
    </div>
  );
}

export default App;
