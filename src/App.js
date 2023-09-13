
import './App.css';
import Click from './components/button'
import Indcase from './components/propsinhandler'
import HandlerasProps from './components/handlerAsProps'
import StopProp from './components/stoppingPropagation'
import PrevDef from './components/preventdefault'
function App() {
  return (
    <div className="App">
      <Click/>
      <Indcase/><br/>
      <HandlerasProps/><br/>
      <StopProp/><br/>
      <PrevDef/>

    </div>
  );
}

export default App;
