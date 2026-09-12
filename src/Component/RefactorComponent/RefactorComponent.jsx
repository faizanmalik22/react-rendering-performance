import { useState } from "react";
function RefactorComponent({children}){
const [x,Setx]=useState(0);//belong to counter
console.log("Called");
return(
    <>
    <button onClick={()=>{Setx(x+1)}}>
     {x}
    </button>
    {/* below button on this component lets we want to render child props component. */}
    {/* now when state change Refactor re-render but this children props (child component) will not re-render. i know why */}
    {children}
   </>
);
}
export default RefactorComponent;
