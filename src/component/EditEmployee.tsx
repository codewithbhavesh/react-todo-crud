import React, { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css"
import axios from "axios";

type Props = {
  data: IEmployee;
  onBackBtnClickHnd: () => void; //we are not returning anything there we are using void
  onUpdatedClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdatedClickHnd } = props; //destructure statement

  const [firstName, setFirstName] = useState(data.firstName); 
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email); 

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

  //UPDATE DATA
  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault(); //page refreshes when we add therefore we prevent it from refreshing
    const updatedData: IEmployee = { //chaging the name of data to updated data because it matches the data
      id: data.id, //we used to create new id in add employee in edit employee we are not going to update the id, we are using the same id which we are updating
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onUpdatedClickHnd(updatedData);
    console.log(updatedData)
    axios.put("http://localhost:3001",updatedData)
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
          <input type="submit" value="update employee" />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
