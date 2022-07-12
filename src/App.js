import { Link } from 'react-router-dom';
import './App.scss';
import MyRouter from "./component/Route/Routerr"



function App() {
 
  return (
    <>
      <header >
        <h2> welcome to My brand Shoes Boutique </h2>
          
        <nav className='navBar'>
          <Link to={"/"} className='link'>Shoes Boutique </Link>
          <Link to={"/EmployeePage"} className='link'> Employees page</Link>
        </nav>

      </header>
      <div className="App">
        <MyRouter/>
      </div>
    </>
  );

}

export default App;