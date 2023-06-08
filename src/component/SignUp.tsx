import React from "react";

function SignUp() {
  return (
    <div>
      <form>
        <div className="container">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            placeholder="Enter name"
          />
        </div>
        <div className="container">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="cpassword"
            className="form-control"
            id="cpassword"
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" className="btn btn-primary mx-1 my-1">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
