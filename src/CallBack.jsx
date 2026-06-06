import {useState,useCallback} from "react";
function child({HandleClick}){
    console.log("Child rendered");
    return(
        <div>
            <button onClick ={HandleClick}>Child</button>
        </div>
    )
}
export default function  CallBack(){
    const [count,setCount]=useState(0);
    const handleClick=useCallback(()=>
    {
        setCount(count+1);
        console.log("Count:",count);
    },[count]);
    return(
        <div>
          
            <child HandleClick={handleClick}/>
                <h1>Count:{count}</h1>
        </div>
    )
}