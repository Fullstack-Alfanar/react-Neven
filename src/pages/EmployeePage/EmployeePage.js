import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeePage.scss"
function EmployeesPage()
{
const [Employee , setEmployee]=useState([])
useEffect(()=>{
    if (localStorage.getItem("EmployeeStorage")) {
        setEmployee(JSON.parse(localStorage.getItem("EmployeeStorage")));
    }
},[])
   return<>
  
     <table>
            <thead>
                <tr>
                    <td><label>First Name</label></td>
                    <td><label>Last Name</label></td>
                    <td><label>Title</label></td>
                    <td><label>Country</label></td>
                    <td><label>City</label></td>
                    <td><label>Birth Date</label></td>
                    <td><label>Image</label></td>
                </tr>
            </thead>
            <tbody>
                {
                    Employee.map((elem) =>
                        <tr className="trr">
                            <td><label>{elem.fnamee}</label></td>
                            <td><label>{elem.lnamee}</label></td>
                            <td><label>{elem.titlee}</label></td>
                            <td><label>{elem.countryy}</label></td>
                            <td><label>{elem.cityy}</label></td>
                            <td><label>{elem.birthDatee}</label></td>
                            <td><img src={elem.image} style={{ height: "50px" }} alt="Employee" /></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        <Link className="AddBtn" to="/AddEmployee">Add Employee</Link>

   </> 
}

export default EmployeesPage;