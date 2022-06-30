import React, {useState,useEffect} from 'react'


function Time() {
    const [time,setTime]=useState();
    useEffect(()=>{
        setInterval(()=>{
               const date= new Date();
        setTime(date.toLocaleTimeString());
        },1000);
     
    },[])
  return (
    <div>
      <label>{time}</label>
    </div>
  );
}

export default Time