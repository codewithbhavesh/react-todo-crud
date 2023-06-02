//creating a type to declare the interface for the employee, howe and what paramteres it should have 
export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

//creating array of object[{}] //the employeeList default value is set as a dummy employeeList object
export const dummyEmployeeList: IEmployee[] = [ 
  {
    id: new Date().toJSON().toString(),
    firstName: "Dummy1",
    lastName: "Dummy11",
    email: "dummy@gmail.com",
  },
];  

export enum PageEnum {
  list, 
  add,
  edit,
}