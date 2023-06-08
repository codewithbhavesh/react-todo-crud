import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import { IEmployee, PageEnum, dummyEmployeeList } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import "./Home.style.css";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

//creating a functional component
const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    dummyEmployeeList as IEmployee[]
  ); //creating 1st state for todo [employeeList:it will hold the list of the employee, 2nd parameter is a function]
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);
  
  
    useEffect(() => {
      const listInString = window.localStorage.getItem("EmployeeList")
      if(listInString){
        _setEmployeeList(JSON.parse(listInString));
      }
    }, []);

  const onAddEmployeeClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  //function to store data in storage
  const _setEmployeeList = (list: IEmployee[]) => {
    setEmployeeList(list)
    window.localStorage.setItem("EmployeeList", JSON.stringify(list))
  }

  const addEmployee = (data: IEmployee) => {
    _setEmployeeList([...employeeList, data]); //first taking the list of employeelist and then appending the data //the way to push the records in the array
  };

  //DELETE EMPLOYEE
  const deleteEmployee = (data: IEmployee) => {
    //to get the index from array i,e employeelist
    //split/splice that
    //update the new record again
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList]

    tempList.splice(indexToDelete, 1); //deletes the record from the list SPLICE SYNTAX-(array.splice(index, howmany, item1, ....., itemX))
    _setEmployeeList(tempList) //set employee list passing the new record //update the employee list with the temp list
    console.log(tempList);
    axios.delete(`http://localhost:3001${data}`);
  }

  const editEmployeeData = (data: IEmployee) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  }

  //getting the data from the update form
  const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter(x => x.id === data.id)[0]; //performing activity on employeelist fetching the filtered data
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData =[...employeeList] //taking employee list in a temporary variable again to do the deep copy
    tempData[indexOfRecord] = data;//in tempdata we are updating the index of record  with new data
    _setEmployeeList(tempData) //this updates the employee record
  }

  return (
    <>
      <article className="article-header">
        <header>
          <h1>React: CRUD Application</h1>
        </header>
        {/* <nav className="d-flex">
          <Link className="btn btn-primary mx-2" to='/login' role="button">Login</Link>
          <Link className="btn btn-primary mx-2" to='/signup' role="button">Signup</Link>
        </nav>  */}
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="create employee"
              onClick={onAddEmployeeClickHnd}
              className="add-employee-btn"
            />
            {/* //calling props
            //from home component passing the callback to the delete component */}
            <EmployeeList list={employeeList} 
            onDeleteClickHnd={deleteEmployee}
            onEdit={editEmployeeData} /> 
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddEmployee
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addEmployee}
          /> //passing showlist pagem on back button //onBackBtnClickHnd it will call showlist page, by this way the show page property will set
        )}

        {shownPage === PageEnum.edit && <EditEmployee
        data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdatedClickHnd={updateData}/>}
      </section>
    </>
  );
};

export default Home;
