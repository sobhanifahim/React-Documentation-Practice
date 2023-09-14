import { useState } from "react";

export default function Form() {
    const [person,setPerson]=useState({
       firstname:'Md. Amir Abdal',
       lastname: 'Sobhani',
       email: 'fahim.sobhani12@gmail.com'

    })
    function handleFirstName(e){
        setPerson({
            ...person,
            firstname : e.target.value
    })
    }
    function handleLastName(e){
        setPerson({
            ...person,
            lastname : e.target.value
    })
    }
    function handleEmail(e){
        setPerson({
            ...person,
            email : e.target.value
    })
    }
    return (
        <>
        <h4>Change state object with spread syntax</h4>
          <label>
            First name:
            <input
              value={person.firstname}
              onChange={handleFirstName}
            />
          </label><br/>
          <label>
            Last name:
            <input
              value={person.lastname}
              onChange={handleLastName}
            />
          </label><br/>
          <label>
            Email:
            <input
              value={person.email}
              onChange={handleEmail}
            />
          </label><br/>
          <p>
            {person.firstname}{' '}
            {person.lastname}{' '}
            ({person.email})
          </p>
        </>
      );
};
