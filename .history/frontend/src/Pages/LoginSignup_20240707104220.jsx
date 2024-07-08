import {useState} from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState ({
    username: "",
    password: "",
    email: "",
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
  const login = async () => {
    console.log ('Login Function Executed')
  }

  const signup = async () => {
    console.log ('Sign Up Function Executed')
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">

        <h1>{state}</h1>

        <div className="loginsignup-fields">
          {state === "Sign Up" 
            ? <input name ='username' value={formData.username} type="text" placeholder="Your Name" onChange = {changeHandler}/> 
            : <></>
          }
          
          <input name='email' value={formData.email} type="email" placeholder="Email address" onChange = {changeHandler}/>
          <input name='password' value={formData.password} type="password" placeholder="Password" onChange = {changeHandler}/>
        </div>

        <button onClick= {() => {state === "Login" ? login() : signup()}}>Continue</button>
        {state === "Sign Up" 
              ?   <p className="loginsignup-login"> Already have an account? <span onClick = {()=> {setState('Login')}}>Login here</span> </p> 
              :   <p className="loginsignup-login"> Create an account? <span onClick = {()=> {setState('Sign Up')}}>Click here</span> </p>}
        
        <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup
