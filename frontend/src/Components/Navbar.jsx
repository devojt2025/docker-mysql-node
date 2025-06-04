import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action/userActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LuLogOut } from "react-icons/lu";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState(null);

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      toast.success("Logged out successfully");
      navigate("/login");
    });
  };

const handleToggle = () => {
  let nextState;
  if (state === null) nextState = 'foodpanda';
  else if (state === 'foodpanda') nextState = 'grab';
  else nextState = null;

  setState(nextState);

  if (nextState === 'foodpanda') {
    navigate('/foodpanda');
  } else if (nextState === 'grab') {
    navigate('/grab');
  } else {
    navigate('/'); 
  }
};

  return (
    <>
      <nav className="sticky top-0 z-10 w-full px-4 py-1.5 lg:px-6 lg:py-2 bg-[#4E0A62]">
        <div className="flex justify-between items-center">
          <ToggleButton onChange={handleToggle} />
          <button
            onClick={handleLogout}
            className="text-white p-2 rounded-full hover:bg-white hover:text-[#4E0A62] transition"
            title="Log Out"
          >
            <LuLogOut className="text-2xl" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
