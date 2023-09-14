import { useState } from "react";

export default function Increment(){
    const [number,setNumber]=useState(0);
    return(
        <>
        <p>{number}</p>
        <button onClick={()=>{
            setNumber(number+5)//first updating then incrementing
            setNumber(n=>n+1)
        }
        }>
            Increment the number
        </button>
        </>

    );
}
