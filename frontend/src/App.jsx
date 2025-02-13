

import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./App.css"




function App() {
  const navigate = useNavigate()
  const [use, setuse] = useState("")
  const [pass, setpass] = useState("")
 
  
  function handleuse(evt) {
    setuse(evt.target.value)
  }
  function handlepass(evt) {
    setpass(evt.target.value)
  }

  function check() {
    const data = axios.post("http://localhost:3000/login?", { "username": use, "password": pass })

    data.then(function (data) {
      if (data.data == true) {
        console.log("Succesfully")
        navigate("./login")
       
        


      }
      else {
        console.log("failed")
        navigate("./failed")
      
        

      }
    })

  }
  return (
    <>

      <div className="login">
        
          <h1>Login</h1>
        
        <div className="one">
          <input onChange={handleuse} type="text" placeholder="username" name="username"></input>
          <input onChange={handlepass} placeholder="password" name="password"></input>
          <button type="submit" onClick={check}>Submit</button>

        </div>
      
      </div>
    </>
  )
}
export default App