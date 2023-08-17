import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [user,setUser] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const readValue = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            console.log('new user =', user)
            await axios.post(`/api/v1/auth/login`, user)
                .then(res => {
                    toast.success(res.data.msg)
                    localStorage.setItem("accessToken", res.data.token)
                    navigate(`/`)
                    window.location.href = "/"
                }).catch(err => toast.error(err.response.data.msg))
        } catch (err) {
            toast.error(err.message)
        }
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center mt-5 mb-5">
                <h3 className="display-4" style={{color:'#52796F'}}>Login</h3>
            </div>
        </div>

        <div className="row log">
            <div className="col-md-6 text-center mt-3 me-0 pe-0">
                <div className="card" style={{height:'300px'}}>
                    <div className="card-body login">
                        <form autoComplete="off" onSubmit={submitHandler}>

                            <div className="form-group mt-3 mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" value={user.email} onChange={readValue} className="form-control" required />
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" value={user.password} onChange={readValue} className="form-control" required/>
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" value="Login" className="btn btn-outline-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-6 text-center mt-3 ps-0 ms-0 pe-0 ">
                <div className="card " style={{height:'300px'}}>
                    <div className="card-body login1">
                        <h4 className="display-4 text-center" style={{color: '#84A98C'}}>
                            Welcome To Login
                        </h4>
                        <h6 className="display-6 mb-4" style={{color:'white'}}>Don't have an Account?</h6>
                        <button className='btn btn-outline-success'>
                            <NavLink to={`/user/register`} className="nav-link">Sign-Up</NavLink>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login