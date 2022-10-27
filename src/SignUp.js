import './SignUp.css'
import React, { Component } from 'react'

export default class SignUp extends Component {

    sendSignUpInfo = async (event) => {
        event.preventDefault()
        const response = await fetch('http://127.0.0.1:5000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fist_name: event.target.firstName.value,
                last_name: event.target.lastName.value,
                email: event.target.email.value,
                password: event.target.password.value
            })
        })
        const data = await response.json()
        console.log(data)
    }

  render() {
    return (
      <div>
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">
                            <div className="px-5 ms-xl-4">
                                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }} />
                                <span className="h1 fw-bold mb-0">Logo</span>
                            </div>
                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                <form onSubmit={(event) => {this.sendSignUpInfo(event)}} style={{ width: '23rem' }}>
                                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Sign Up</h3>
                                    <div className="form-outline mb-4">
                                        <input type="text" id="form2Example18" className="form-control form-control-lg" name='firstName' />
                                        <label className="form-label" htmlFor="form2Example18">First name</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" id="form2Example19" className="form-control form-control-lg" name='lastName'/>
                                        <label className="form-label" htmlFor="form2Example19">Last Name</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form2Example20" className="form-control form-control-lg" name='email'/>
                                        <label className="form-label" htmlFor="form2Example20">Email address</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="password" id="form2Example28" className="form-control form-control-lg" name='password'/>
                                        <label className="form-label" htmlFor="form2Example28">Password</label>
                                    </div>
                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-info btn-lg btn-block" type="submit">Sign Up</button>
                                    </div>
                                    <p>Already have an account? <a href="/login" className="link-info">Login here</a></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} /> */}
                        </div>
                    </div>
                </div>
            </section>

      </div>
    )
  }
}
