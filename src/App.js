import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  //state variable for deadline
const [time,setTime]=useState({
  hours:0,
  minutes:0,
  seconds:0
})

//state variable for time left
const [timeLeft,setTimeLeft]=useState(0);



//evenhandler function for input event
const handleChange=(event)=>{
  setTime(oldValue=>{
    return{...oldValue,
    [event.target.name]:event.target.value
    }
  })
}
//using useEffect hook to run for the first time when the component is mounted

useEffect(()=>{
  const totalSeconds=time.hours*3600+time.minutes*60+time.seconds;
  setTimeLeft(totalSeconds)
},[time])


//useEffect to run when the times keep decreasing

useEffect(()=>{
    const intervalId= setInterval(()=>{
      setTimeLeft(timeLeft-1)
    },1000)

    return()=>{
      clearInterval(intervalId)
    };
},[timeLeft])


const hours = Math.floor(timeLeft / 36000);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

function submitHandler(event){
  event.preventDefault()
}


  return (
    <div className="App">
      <div className='clock'>
          <div>
            Hours:{hours}
          </div>
          <div>Minutes:{minutes}</div>
          <div>Seconds:{seconds} </div>
      </div>
      <form onSubmit={submitHandler}>
        <label><input type="number" placeholder='hours' name="hours" onChange={handleChange}></input></label>
        <label><input type="number" placeholder='minutes' name='minutes'onChange={handleChange}></input></label>
        <label><input type="number" placeholder='seconds' name='seconds'onChange={handleChange}></input></label>
        <button>Start</button>
      </form>
    </div>
  );
}

export default App;
