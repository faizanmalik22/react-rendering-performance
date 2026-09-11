import { useState } from 'react';
import './App.css'
import SlowComponent from './Component/SlowComponent/SlowComponent';
import Modal from './Component/Modal/Modal';
import ButtonwithModal from './Component/ButtonWithModal/ButtonWithModal';
import useModalDialog from './Hooks/useModalDialog';
import RefactorComponent from './Component/RefactorComponent/RefactorComponent';
function App() {

  return (
    <>
   {/* Import the counter here so App doesnt contain or uses x so no re-render for App */}
       {/* <button onClick={()=>Setx(x+1)}>counter {x}</button> */}
      
       
        <RefactorComponent>
         {/* pass as child props  so when Re-factor re-render this child component will not re-render*/}
         <>
           <h1>Something done here</h1>
          <div>Somthing also done here</div>
          <SlowComponent ms={1000}/>
         </>
        </RefactorComponent>
     
       {/* <ButtonwithModal/> */}
    </>
  );
}

export default App
