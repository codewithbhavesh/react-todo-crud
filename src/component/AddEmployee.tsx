import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";
import { useState } from "react";
import axios from "axios";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState(""); //creating usestate to set firstname, lastname and email, as a string("")
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { onBackBtnClickHnd, onSubmitClickHnd } = props; //destructuring onBackBtnClickHnd

  const onFirstNameChangeHnd = (e: any) => {
    //we get the data in varaiable rafering it as (e)
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    //once we start typing it will update the state from the add employee form
     setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault(); //page refreshes when we add therefore we prevent it from refreshing
    const data: IEmployee = {
      id: Date.now(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    console.log(data)
    onSubmitClickHnd(data);
    axios.post("http://localhost:3001",data) //passing data to backend through Axios
    onBackBtnClickHnd();  
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add Employee Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={onFirstNameChangeHnd}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" value={lastName} onChange={onLastNameChangeHnd} />
        </div>
        <div>
          <label>Email Add: </label>
          <input type="text" value={email} onChange={onEmailChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="create employee" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
