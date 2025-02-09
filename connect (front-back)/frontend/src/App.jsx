import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=> {

    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)

    })

    .catch((error)=>{
      console.log(error)

    })
  })
 

  return (
    <>
      <h1>hi this is nikhil</h1>
      <p>jokes:{jokes.length}</p>


      {
        jokes.map((jokes)=> (
          <div key={jokes.id}>

          <h2>{jokes.value}</h2>
          <p>{jokes.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
