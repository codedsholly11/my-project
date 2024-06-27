import React, { useState } from 'react'

const Signup = () => {
const [email, setEmail] = useState('')
const [fullname, setFullname] = useState('')
const [password, setPassword] = useState('')

function handleEmail(e){
    const userInput = e.target.value;
    setEmail(userInput)
}

function handleSubmit(e){
    e.preventDefault()

    if(fullname.length < 5){
        return alert("Your full name is too short!")
    }

    if(password.length < 4){
        return alert("Your password is too short!")
    }

    if(email.length < 5){
        return alert("Your email address is invalid!")
    }

    console.log({name: fullname, userEmail: email, pass: password});
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Email' value={email} onChange={handleEmail} />
            <input type="text" placeholder='Full name' value={fullname} onChange={(e)=> setFullname(e.target.value)} />
            <input type="password" value={password} onChange={(event)=> setPassword(event.target.value)} />

            <button >Sign up</button>
        </form>
    </div>
  )
}

export default Signup