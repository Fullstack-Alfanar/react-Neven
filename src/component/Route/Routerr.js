import { useRoutes } from "react-router-dom";
import AddingEmployee from "../../pages/AddEmployee/AddEmployee";
import AddShoes from "../../pages/AddShoes/AddShoes"
import EmployeesPage from "../../pages/EmployeePage/EmployeePage";
// import MyHome from "../../pages/Home/home"
import ShoesShowpage from "../../pages/ShoesPage/ShoesPage";


function MyRouter()
{
return useRoutes([
   {path : "/" , element: <ShoesShowpage/>},
    {path: "/AddShoes" , element: <AddShoes/>},
    {path: "/EmployeePage" , element: <EmployeesPage />},
    {path: "/AddEmployee" , element: <AddingEmployee />}
])
}
export default MyRouter;




