
import React,{ useState } from "react";


const Func = () =>{
    const [count, setCount] = useState(0);
    console.log(count, setCount);

    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)}></button>
        </div>
    );
}
export default  Func;