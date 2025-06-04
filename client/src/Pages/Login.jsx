import React, { useState, useEffect } from 'react'
import logo from '../assets/images/gnx_logo_transparent.png'
import { login } from '../../../frontend/src/redux/action/userActions'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Components/Layout/Loader'
import { resetError } from '../../../frontend/src/redux/slice/userSlice'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading, error, isLoggedIn } = useSelector((state) => state.users);
    const [formData, setFormData] = useState(() => ({
        username: '',
        password: '',
        grant_type: 'client_credentials'
    }))
    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.username === '' || formData.password === '') {
            toast.error("Please fill in all fields");
            return;
        }
        dispatch(login(formData));
    }
     useEffect(()=>{
        if (isLoggedIn) {
            toast.success("Login successful");
            navigate("/");
        }
        if (error){
            
            toast.error(error);
            dispatch(resetError());
        }
    },[isLoggedIn, error])
    return (
        <div className="flex justify-center items-center h-[calc(100vh-5rem)]">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="flex flex-col items-center w-full justify-center p-4">
                    <img
                        src={logo}
                        alt="GenieX Logo" className="w-[40%]" />
                    <p>Welcome, please log in</p>
                </figure>
                <div className="card-body flex items-center">

                    <label className="input validator w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </g>
                        </svg>
                        <input
                            type="text"
                            required
                            placeholder="Username"
                            pattern="[A-Za-z][A-Za-z0-9\-]*"
                            minlength="3"
                            
                            title="Only letters, numbers or dash"
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}

                        />
                    </label>
                    <p className="validator-hint hidden w-full">
                        Must be at least 3 characters long
                        <br />containing only letters, numbers or dash
                    </p>
                    <label className="input validator w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                ></path>
                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </g>
                        </svg>
                        <input
                            type="password"
                            required
                            placeholder="Password"
                            minlength="8"
                            
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </label>
                    <p className="validator-hint hidden w-full">
                        Must be more than 8 characters, including
                        <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                    </p>
                    <div className="card-actions w-full justify-end items-center">
                        {loading ? <Loader/> : <button className="btn btn-primary" onClick={submitHandler}>Login</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login