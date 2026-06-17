import {useRef} from "react";
function Refer() {
    const inputref = useRef();
    const uber = ()=>{
       inputref.current.focus(); 
    };
    return (
        <div><label>Name:</label>
            <input ref={inputref} type="text" />
            <button onClick={uber} >Enter</button>
        </div>
    );
}
export default Refer;