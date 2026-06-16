import { useState } from "react";
import App from "./App.jsx"
function Fire()
{
    const [name , getName]=useState("");
    return (
        <>
        <label>
            Name: <input type="text" onChange={
                (e)=>getName(e.target.value)
                } />
        </label>
        <h1>{name}</h1>
        </>
    );
}
function Master()
{
    const [sample , setName]=useState("Travel");
    return (
       <> <h1>{sample}</h1>
        <button style={{width:"fit-content"}}
        onDoubleClick={()=>setName("Journey")}
        >Change</button>
        </>
    );
}
function Classic()
{
    const[show , setshow]=useState(false);
    return (
        <>
        <button
         onClick={()=>setshow(!show)}
        >Reveal</button>
        {show && <App></App>}
        </>
    );
}
export default Classic;