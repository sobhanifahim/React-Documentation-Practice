import { useState } from 'react';

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function Insert() {
    const [name,setName]=useState('')
    const[artists,setArtists]=useState(initialArtists)

    function handleClick(){
        const insert=2
        const nextItem=[
            ...artists.slice(0,insert),

            {id:nextId++,name:name},

            ...artists.slice(insert)

        ]
        setArtists(nextItem)
        setName('')

    }

    return(
        <>
        <h1>Inspiring sculptors:</h1>
        <input value={name} onChange={e=>{
            setName(
                e.target.value
            )
        }} />
        <button onClick={handleClick}>
            Insert
        </button>
        <ul>
           {artists.map(a=>(
            <li key={a.id}>{a.name}</li>
           ))} 
        </ul>
        
        </>
    )
};
