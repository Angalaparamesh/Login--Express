import {useState} from 'react'

function App()
{

  const[user,setuser] = useState("")
  const[pass,setpass] = useState("")

  function handleuser(evt)
  {
    setuser(evt.target.value)
  }

  function handlepass(evt)
  {
    setpass(evt.target.value)

  }

  return(
    <form action="http://localhost:5000/login">
      <h1>Login Form</h1>
      <input onChange={handleuser} name="username" placeholder="username"></input>
      <input onChange={handlepass} name="password" placeholder="password"></input>
      <button>Login</button>
    </form>
  )
}

export default App