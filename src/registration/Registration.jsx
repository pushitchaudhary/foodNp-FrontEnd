import React from 'react'
import './registration.css'
function Registration() {
  return (
    <>
        <body>
            <div className="container">
                <form>
                    <h2 className='Registration'>Registration Form</h2>
                    <div className="form-group">
                        <label htmlFor="userEmail">Email</label>
                        <input type="email" id="userEmail" name="userEmail"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userName">Name</label>
                        <input type="text" id="userName" name="userName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userPassword">Password</label>
                        <input type="password" id="userPassword" name="userPassword" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userPhone">Phone</label>
                        <input type="tel" id="userPhone" name="userPhone" />
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
