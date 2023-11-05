import React from 'react'
import './registration.css'
import {useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'


function Registration() {

    const sitekey = "6LcNT_coAAAAAA_PltvSkI8tXWOIOTdWWdWFPGU7"

    const [email, setEmail ] = useState('')
    const [name, setName ] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')


    const submitData = ()=>{
        console.log('email', email)
        console.log('name', name)
        console.log('pass', password)
        console.log('phone', phone)
    }

    const onChange = (value)=>{
        console.log(value)
    }

  return (
    <>
        <body>
            <div className="container">
                <form >
                    <h2 className='Registration'>Registration Form</h2>
                    <div className="form-group">
                        <label htmlFor="userEmail">Email</label>
                        <input type="email" id="userEmail" name="userEmail" onChange={(e)=>{ setEmail(e.target.value) }}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userName">Name</label>
                        <input type="text" id="userName" name="userName" onChange={(e)=>{ setName(e.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userPassword">Password</label>
                        <input type="password" id="userPassword" name="userPassword" onChange={(e)=>{ setPassword(e.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userPhone">Phone</label>
                        <input type="tel" id="userPhone" name="userPhone" onChange={(e)=>{ setPhone(e.target.value) }} />
                    </div>
                    <div className="form-group">
                        <ReCAPTCHA 
                            sitekey = {sitekey}
                            onChange={onChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <a href="/login">Already have an account?</a>
            </div>
        </body>
    </>
  )
}

export default Registration
