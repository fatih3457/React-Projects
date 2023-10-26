import Lottery from './Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='cookie luck' maxBalls={4} maxNum={20}/>
    </div>
  );
}

export default App;
