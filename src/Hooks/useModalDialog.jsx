import { useState } from "react";

export default function useModalDialog(){
   const [isOpen, SetisOpen]=useState(false);
   return {
     isOpen,
     Open:()=>SetisOpen(true),
     Close:()=>SetisOpen(false)
   }//de-structure the object to get the Statevariable and 2 sEtter function
}