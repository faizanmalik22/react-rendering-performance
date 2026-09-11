export default function Modal({Setclose}){
    return(
        <>
          <div>
            <h2>Modal</h2>
            <p>This is a modal</p>
            {/* changing the state of isopen */}
            <button onClick={Setclose}>Close</button>
          </div>
        </>
    )
}