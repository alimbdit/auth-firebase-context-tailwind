import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Link, Navigate } from 'react-router-dom';
import Login from './../components/Login';

const PrivateRoute = ({children}) => {


    const {user, loading} = useContext(AuthContext);

    if(loading){
       return <progress className="progress  w-56" value="70" max="100"></progress>
    }
    if(user){
        return children;
    }

    return (
        
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;