import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        // const errorCode = code;
        toast.error(error.message);
      });
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "text-black")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/collage"
          className={({ isActive }) => (isActive ? "active" : "text-black")}
        >
          Colleges
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admission"
          className={({ isActive }) => (isActive ? "active" : "text-black")}
        >
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mycollage"
          className={({ isActive }) => (isActive ? "active" : "text-black")}
        >
          My College
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar px-12 bg-slate-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content text-black mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              {navOptions}
            </ul>
          </div>
          <Link className="flex items-center gap-2">
            <div>
              <img className="w-12 h-12" src={logo} alt="logo" />
            </div>
            <div className="font-bold text-2xl">AdmitEase</div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 font-semibold text-black text-lg">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              <div
                className="lg:tooltip hidden lg:visible lg:tooltip-bottom"
                data-tip={user?.displayName}
              >
                <div className="avatar">
                  <div className="w-6 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
              <button onClick={handleLogOut} className="btns-primary">
                SignOut
              </button>
            </div>
          ) : (
            <Link to="/login" className="btns-primary font-bold">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
