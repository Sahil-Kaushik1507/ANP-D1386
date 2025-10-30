import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import {useForm} from 'react-hook-form'

function App() {


  const {register, handleSubmit,handleChange } = useForm();
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')


  const [formData,setFormData]=useState({
    username:"",
    email:"",
    password:""
  })

  const handleChange = (e)=>{
    setFormData(
      {...formData, [e.target.name]:e.target.value}
    )
  }


// const handleNameChange = (e)=>{
//   setName(e.target.value)
// }
// const handleEmailChange = (e)=>{
//   setEmail(e.target.value)
// }
// const handlePasswordChange = (e)=>{
//   setPassword(e.target.value)
// }

const handleSubmit = (e)=>{
  e.preventDefault();

  if(!formData.username){
    alert("Name is Required")
  }
  
  else if(!formData.email){
    alert("Email is Required")
  }
  
  else if(!formData.password){
    alert("Password is Required")
  }
  else{

    alert("Name "+ formData.username + " Email " + formData.email + " Password "+ formData.password)
  }
}


  return (
    <>
    <h1>Forms</h1>
    <form action="" onSubmit={handleSubmit}>
    <label htmlFor="username">User Name </label>
    <input type="text" id='username' name='username' value={formData.username} onChange={handleChange} /> <br /><br />
    <label htmlFor="email">Email </label>
    <input type="email" id='email' name='email'value={formData.email} onChange={handleChange}/><br /><br />
    <label htmlFor="password">Password </label>
    <input type="password" id='password' name='password' value={formData.password} onChange={handleChange}/><br /><br />

    <button type="submit" > Submit</button>

    </form>
  
    </>
  )
}

export default App
