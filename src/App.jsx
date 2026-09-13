import { useState, memo, useCallback } from 'react';
import './App.css'
import SlowComponent from './Component/SlowComponent/SlowComponent';
import Modal from './Component/Modal/Modal';

const MemoizedSlowComponent=memo(SlowComponent)//memo() expects a React component function
function App() {
   const [isOpen, setisOpen]=useState(false);
   const someFunction=()=>{};
   const MemoizesomeFunction=useCallback(someFunction,[]);
   return (
     <>
        <button onClick={()=>{setisOpen(true)}}>Open Modal</button>
        {isOpen&& <Modal Setclose={()=>{setisOpen(false)}}/>}
           <h1>Something done here</h1>
          <div>Somthing also done here</div>
          <MemoizedSlowComponent time={1000} custom={MemoizesomeFunction}/>
         </>
  );
}

export default App
