import { useState } from 'react'
import './App.css'
import validator from 'validator';

const App = () => {
  const [errorMessage, setErrorMessage] = useState("")

  const validate = (value) => {
    if(validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage("Is strong password")
    } else {
      setErrorMessage("Password is not strong enough")
    }
  }
  return (
    <div style={{
      marginLeft: "200px",
    }}><pre>
      <h2>Checking password strength in React.js</h2>
      <span>Enter Password: </span><input type="text" 
      onChange={(e) => validate(e.target.value)}></input><br />
      {errorMessage === '' ? null : <span style={{
        fontWeight: "bold",
        color: "red",
      }}>{errorMessage}</span>}
     </pre>
      </div>
  )
}

export default App
