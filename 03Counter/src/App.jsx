import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[count,setcounter] = useState(10)
  
  let up = ()=>{
    if(count<20){
      console.log("clicked",count);
      // count = count+1;
      setcounter(count=>count+1)
      setcounter(count=>count+1)
      setcounter(count=>count+1)
      setcounter(count=>count+1)
      
    }
  

  }
  let down = ()=>{
    if(count>=1){
      console.log("down",count);
    count =count-1;
    setcounter(count)
    }
    
  }
 
  return (
    <>
     <h1>Hello Ankit</h1>
     <h2>count is {count}</h2>
     <button 
      onClick={up}
     >UP</button>
     <br/>
     
     <button
     onClick={down}
     >DOWN</button>
    </>
  )
}

export default App
