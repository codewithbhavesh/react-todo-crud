import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
function App() {
  return (
    <Router>
      <div className="content">
        <Switch> {/* Switch component so that only one route component shows in the browser at any one time */}
            <Route exact path="/">
                <Home/>
            </Route>    
            <Route exact path="/login"> 
                <Login/>
            </Route>  
            <Route exact path ="/signup">
                <SignUp/>
            </Route>          
        </Switch>
      </div>
    </Router>

    //   <BrowserRouter>
    //   <Switch>
    //     <PrivateRoute exact path="/" component={Home}/>
    //     <RestrictedRoute exact path="/login" component={Login} />
    //     <Route exact path="/register" component={SignUp} />
    //     </Switch>
    // </BrowserRouter>
  );
}

export default App;
