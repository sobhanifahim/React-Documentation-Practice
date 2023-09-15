import { useState } from 'react';


const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function List() {
    const [list,setList]=useState(initialList)


    function handleClick(){
        const nextList= [...list]

        nextList.reverse();
        setList(nextList)
    }

    return(
        <>
        <button onClick={handleClick}>
            Rev
        </button>

        <ul>
            {list.map(l=>(
                <li key={l.id}>{l.title}</li>
            ))}
        </ul>
        </>
    );
};
