import React from "react";
import "./EmployeeModal.style.css";
import { IEmployee } from "./Employee.type";

type Props = {
    onClose: () => void;
    data: IEmployee
}

function EmployeeModal(props: Props) {
    const { onClose, data } = props
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;
        </span>
        <div>
            <h3>Employee Data</h3>
        </div>
            <div>
                <label>first Name: {data.firstName}</label>
            </div>
            <div>
                <label>last Name: {data.lastName}</label>
            </div>
            <div>
                <label>email: {data.email}</label>
            </div>
      </div>
    </div>
  );
}

export default EmployeeModal;
