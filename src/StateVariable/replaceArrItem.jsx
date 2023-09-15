import { useState } from "react";

let initialCounters = [
    0, 0, 0
  ];
export default function Replace() {
  const[counter,setCounter]=useState(
    initialCounters
  )  

  function handleIncrementClick(index){
         const nextcounters=counter.map((c,i)=>{
              if(index===i){
                return c+1;
              }
              return c
         })
         setCounter(nextcounters)
  }

  return(
    <ul>
      {counter.map((c,i)=>(
        <li key={i}>
           {c}
           <button onClick={()=>{
            handleIncrementClick(i)
           }}>
             +1
           </button>
        </li>
      ))}
    </ul>
  );
};
