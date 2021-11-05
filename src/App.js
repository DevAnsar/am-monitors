import './App.css';
import {DigitalNumber} from "./../src/lib/index"
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <div style={{width:'300px'}}>
          <DigitalNumber number='267' space_betwen={40} />
       </div>
       
      </header>
    </div>
  );
}

export default App;
