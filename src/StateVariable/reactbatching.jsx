import { useState } from "react";

export default function Increment(){
    const [number,setNumber]=useState(0);
    return(
        <>
        <p>{number}</p>
        <button onClick={()=>{
            
            setNumber(n=>n+1)
            setNumber(n=>n+1)
            setNumber(n=>n+1)
        }
        }>
            +3
        </button>
        </>

    );
}
