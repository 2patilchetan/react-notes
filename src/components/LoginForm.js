import React from "react";
import auth from "../auth";

const LoginForm = props => {
  function login(){
    auth.login(() => {
      props.history.push("/");
    });
  }
  return (
    <div className="container-fluid">
    <div className="d-flex row justify-content-center align-items-center">

    <form className="col col-sm-4" onSubmit={ login }>
      <div className="form-group">
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required  className="form-control"/>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
      
    </form>
    </div>
    </div>
  );
};

export default LoginForm;
