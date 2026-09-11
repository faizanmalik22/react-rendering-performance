//Note: this component is slow to render
function WaitingforSomething(ms){
    const start=Date.now();//return ms from 1 jan 1970 to cur time
    let now =start;
  
    //big loop to consume time
    while(now-start<ms){//it run tills ms time?
          now=Date.now();
    }
}

export default function SlowComponent(){

    WaitingforSomething(5000);//wait for 5 sec than return the UI from below
    return (<div>Slow component</div>);//like nothing render 
}
