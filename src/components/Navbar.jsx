import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../app/userSlice";
import { auth } from "../firebase/firebiseConfig";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

function themeFromLocalStorage() {
  return localStorage.getItem("theme") || "wireframe";
}

function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [theme, setTheme] = useState(themeFromLocalStorage());

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("See you soon ✋");
      dispatch(logout());
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleTheme = () => {
    const newTheme = theme === "wireframe" ? "dark" : "wireframe";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="bg-base-200 fixed pt-4 top-0 left-0 right-0 z-10">
      <nav className="navbar align-elements -mt-8 ">
        <div className="navbar-start">
          <img
            className="w-20 h-20"
            src="../public/reshot-icon-progress-JEANMZ3WU4.svg"
            alt="Logo"
          />
        </div>
        <div className="gap-6 font-bold ">
          <div className="navbar-center">
            <Link to="/" className="hover:text-purple-600">
              Home
            </Link>
          </div>
          <div className="navbar-center">
            <Link to="/gallery" className="hover:text-purple-600">
              Gallery
            </Link>
          </div>
          <div className="navbar-center">
            <Link to="/liked" className="hover:text-purple-600">
              Liked
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4 ">
            <h4 className="text-blue-600 border-2 p-2 border-blue-400 rounded-full mr-4">
              {user.displayName}
            </h4>
            <div className="avatar">
              <div className="ring-primary mr-4 ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : `https://api.dicebear.com/9.x/initials/svg?seed=${user.displayName}`
                  }
                  alt="User Avatar"
                />
              </div>
            </div>
          </div>
        </div>
        <label className="swap swap-rotate ml-6 -mr-4">
          <input type="checkbox" />
        </label>
        <button onClick={handleTheme} className="btn btn-outline btn-circle">
          {theme === "wireframe" ? <IoIosSunny /> : <IoIosMoon />}
        </button>
        <button
          onClick={handleLogout}
          className="btn btn-success rounded-xl  ml-4"
        >
          EXIT
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
