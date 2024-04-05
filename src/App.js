import './App.css';
import DoubleDice from './DoubleDice';
import ColorList from './ColorList';

function App() {
  return (
    <div className="App">
    <DoubleDice/>
    <DoubleDice/>
    <ColorList colors = {["red","green","blue"]}/>
    </div>
  );
}

export default App;
