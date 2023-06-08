
import React from "react";
import { useState } from "react";

 const Login = () => {
//      const [credentials, setCredentials] = useState{{email:"", password: ""}}

//      const handleSubmit = async (e: any) => {
//      e.preventdefault(); to stop the reloading of page
//      const response = await fetch("http:localhost:5000/login", {
//        method: "POST",
//        headers: {
//          "Content-Type": "application/json"
//        },
//        body: JSON.stringify({email: credentials.email, password: CredentialsContainer.password })
//      });
//    };
   return (
     <div>
       <form>
         <div className="form-group">
           <label htmlFor="email">Email address</label>
           <input
             type="email"
             className="form-control"
            //  value={credentials.email}
            //  onChange={onChange}
             id="email"
             name="email"
             aria-describedby="emailHelp"
             placeholder="Enter email"
           />
         </div>
         <div className="form-group" >
           <label htmlFor="password">Password</label>
           <input
             type="password"
             className="form-control"
            //  value={credentials.password}
            //  onChange={onChange}
             name="password"
             id="password"
             placeholder="Password"
           />
         </div>
         <button type="submit" className="btn btn-primary mx-1 my-1">
           Submit
         </button>
       </form>
     </div>
   );
 };

 export default Login;
