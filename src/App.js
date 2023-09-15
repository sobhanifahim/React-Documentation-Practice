
import './App.css';
import Click from './components/button'
import Indcase from './components/propsinhandler'
import HandlerasProps from './components/handlerAsProps'
import StopProp from './components/stoppingPropagation'
import PrevDef from './components/preventdefault'
import Gallery from './StateVariable/gallery'
import Batch from './StateVariable/reactbatching'
import Increment from './StateVariable/updateIncrement'
import Dot from './StateVariable/movingdot'
import Spread from './StateVariable/spreadsyntax'
import Nested from './StateVariable/updatenestedobj'
import Addarr from './StateVariable/addinginarray' 
import DelElem from './StateVariable/removingArrayElem'
import TransForm from './StateVariable/TransformArray'
import Replace from './StateVariable/replaceArrItem'
import Insert  from './StateVariable/insertArrElem';
function App() {
  return (
    <div className="App">
      <Click/>
      <Indcase/><br/>
      <HandlerasProps/><br/>
      <StopProp/><br/>
      <PrevDef/> <br/>
      <Gallery/>
      <Batch/>
      <Increment/>
      <Dot/>
      <Spread/>
      <Nested/>
      <Addarr/>
      <DelElem/>
      <TransForm/>
      <Replace/>
      <Insert/>
    </div>
  );
}

export default App;
