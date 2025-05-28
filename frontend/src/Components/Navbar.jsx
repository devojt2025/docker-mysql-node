import { Button } from "primereact/button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action/userActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout()).then(() => {
      toast.success("Logged out successfully");
      navigate("/login");
    });
  };
  return (
    <>
      <nav className="sticky top-0 z-10 w-full px-4 py-1.5 lg:px-6 lg:py-2 bg-[#E53777]">
        <div className="flex items-center justify-end">
          <button
            onClick={handleLogout}
            className="text-white p-2 rounded-full hover:bg-white hover:text-[#E53777] transition"
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
