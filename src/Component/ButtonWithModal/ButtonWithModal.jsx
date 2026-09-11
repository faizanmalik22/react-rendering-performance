import { useState } from "react";
import Modal from "../Modal/Modal";
import useModalDialog from "../../Hooks/useModalDialog";

export default function ButtonwithModal(){
  //  const [isOpen,SetisOpen]=useState(false);
  const {isOpen,Open,Close}=useModalDialog();
    return(
        <>
        {/* so when state change only this ButtonWithModalRe-render and acc the the isOpen val modal reder or not here */}
         {isOpen?<Modal Setclose={Close}/>:<button onClick={Open}>Open Modal</button>
         }

        </>
    );
}