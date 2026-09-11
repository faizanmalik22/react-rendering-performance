import { useState } from 'react';
import './App.css'
import SlowComponent from './Component/SlowComponent/SlowComponent';
import Modal from './Component/Modal/Modal';
import ButtonwithModal from './Component/ButtonWithModal/ButtonWithModal';
import useModalDialog from './Hooks/useModalDialog';

function Counter(){
  //Sol:State colocation : keeping the counter state x to close to button
    const [x,Setx]=useState(0);//belong to counter
    return (
      // UI of the Counter
      <button onClick={()=>Setx(x+1)}>counter {x}</button>
    )
}

function App() {
 
  return (
    <>
   {/* Import the counter here so App doesnt contain or uses x so no re-render for App */}
      <Counter/>
      <h1>Something done here</h1>
      <div>Somthing also done here</div>
      <SlowComponent/>
      <ButtonwithModal/>
    </>
  );
}

export default App
