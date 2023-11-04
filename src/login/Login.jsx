import React from 'react'
import './login.css'
function Login() {
  return (
    <>
        <body>
            <div className="container">
                <form>
                    <h2 className='Registration'>Login Form</h2>
                    <div className="form-group">
                        <label htmlFor="userEmail">Email</label>
                        <input type="email" id="userEmail" name="userEmail"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userPassword">Password</label>
                        <input type="password" id="userPassword" name="userPassword" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <a href="/registration">Sign Up?</a>
            </div>
        </body>
    </>
  )
}

export default Login
