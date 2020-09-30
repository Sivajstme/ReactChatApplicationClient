
import React,{ useState } from "react";


const Func = () =>{
    
    const [personState , setPersonState] = useState({
        person: [{
                name : 'Matt',
                age : 21
            },
            {
                name : 'Harry',
                age : 23
            }   
        ],
        otherSate : 'Some Other Value'
    });

    const TestFunc = (e) =>{
        console.log(e);
        setPersonState({
            person : [{name : 'Just',age : 12}
                    ,{name : 'Patty', age: 23}]
                    })
    };

    return(
        <div>
            <p>The Starting Name is  {personState.person[0].name}</p>
            <button onClick={TestFunc}>Click</button>
            
        </div>
    );
}
export default  Func;