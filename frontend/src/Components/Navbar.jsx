import { Button } from 'primereact/button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/action/userActions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout()).then(() => {
            toast.success("Logged out successfully");
            navigate("/login");
        });

    }
    return (
        <>
            <nav className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-[#E53777]">
                <div className="flex items-center justify-between text-light gap-4">
                    <div className="button-wrapper-white w-full">
                        <Button label="Accepted" className="w-full" style={{ color: "#000", backgroundColor: "#fff", borderColor: "#fff" }} />
                    </div>

                    <div className="button-wrapper-white w-full">
                        <Button label="Preparing" className="w-full" style={{ color: "#000", backgroundColor: "#fff", borderColor: "#fff" }} />
                    </div>
                    <div className="button-wrapper-black w-full">
                        <Button label="Log Out" onClick={handleLogout} className="w-full" style={{ color: "#fff", backgroundColor: "#000", borderColor: "#000" }} />
                    </div>
                    <div className="button-wrapper-white w-full">
                        <Button label="Picked Up" className="w-full" style={{ color: "#000", backgroundColor: "#fff", borderColor: "#fff" }} />
                    </div>
                    <div className="button-wrapper-white w-full">
                        <Button label="Rejected" className="w-full" style={{ color: "#000", backgroundColor: "#fff", borderColor: "#fff" }} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar