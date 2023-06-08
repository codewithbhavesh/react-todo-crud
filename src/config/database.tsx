import express from "express";
import {DataSource} from "typeorm"; //function to call when create a connection with the database

const app = express();

export const datasource = new DataSource({
    type: 'mysql',
    database: "Bhavesh",
    username: "root",
    password: "root",
    logging: true, 
    synchronize: true, 

});

// datasource.initialize()
// .then
app.listen("5000", (): void => { 
    console.log("Server Running!");
});
// function connects(){
//     return mongoose.connect('mongodb://localhost:27017/Todo')
//     .then(() => {
//         console.log("db connected");
//     }).catch((error:any) => { //if error prints error
//         console.log(error)
//     })
// }
 
