import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";
import EmployeeModal from "./EmployeeModal";
import { useState } from "react";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  //all the props will get in the list, we have destructured the object here
  //we can use this list to render in the table
  //to render the list we use map method
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false); //onclose it will close the modal

  return (
    <div>
      <article>
        <h3 className="list-header">Employee List</h3>
      </article>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        {list.map((employee) => {
          //console.log(employee)fr
          return (
            <tr key={employee.id}>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email}</td>
              <td>
                <div>
                  {/* //passing the employee data to the modal */}
                  <input
                    type="button"
                    value="read"
                    onClick={() => viewEmployee(employee)}
                  />
                  <input type="button" value="update" onClick={() => onEdit(employee)} />
                  {/* //calling t he callback function onDeleteClickHnd in employeelist */}
                  <input
                    type="button"
                    value="delete"
                    onClick={() => onDeleteClickHnd(employee)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {/* //is use state (showmodal) is true then only show this */}
      {showModal && dataToShow !== null &&
      <EmployeeModal onClose={onCloseModal} data={dataToShow} />}
    </div>
  ); //table to write the list in the table format
};

export default EmployeeList;
