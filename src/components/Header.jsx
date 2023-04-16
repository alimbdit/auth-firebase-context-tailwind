import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(()=>{}).catch(error=> console.error(error))
  }


  return (
    <nav>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <div>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            {
              user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
            }
            <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            {
              user ? <><small className="mr-5">{user.email}</small><button onClick={handleLogOut} className="btn btn-xs">SignOut</button></> : <Link to='/login'>Login</Link>
            }
        </div>
      </div>
    </nav>
  );
};

export default Header;
