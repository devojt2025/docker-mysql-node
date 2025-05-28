import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import logo from '../assets/images/gnx_logo_transparent.png'
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/action/userActions';
import { resetError } from '../redux/slice/userSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {ProgressSpinner} from 'primereact/progressspinner';
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
    const header = (
        <div className="flex justify-center items-center">
            <img alt="Card" src={logo} className="w-36" />
        </div>
    );
    const footer = (
        <>
            <div className="button-wrapper-violet">
               {loading ? <div className="w-full flex items-center justify-center"><ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="5"/></div> : <Button label="Login" className="w-full" style={{ backgroundColor: "#4E0A62", borderColor: "#4E0A62" }} onClick={submitHandler} />}
            </div>
        </>
    );
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
        <div className="login-card flex justify-center items-center h-[calc(100vh-2rem)]">
            <Card footer={footer} header={header} className="w-[15rem] md:w-[25rem] border p-4">
                <FloatLabel className="w-full mb-8">
                    <InputText id="username" className="w-full" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                    <label htmlFor="username">Username</label>
                </FloatLabel>
                <FloatLabel className="w-full">
                    <InputText id="password" type="password" className="w-full" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    <label htmlFor="password">Password</label>
                </FloatLabel>
            </Card>
        </div>
    )
}

export default Login