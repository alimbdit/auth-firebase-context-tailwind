import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold mb-5">Please Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input required type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input required type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <label className="label mb-4 ml-8">
      <Link to="/register" className="label-text-alt link link-hover">New in Auth Master? Please Register</Link>
      </label>
    </div>
  </div>
</div>
    );
};

export default Login;