
import './App.css';
import Shoes from './component/shoesbrand/shoes';
import Time from './component/Time/time';
//assetes / images
import img1 from "./assets/images/guess.jpg";
import img2 from "./assets/images/nike.jpg";
import img3 from "./assets/images/piere.jpg";
import img4 from "./assets/images/puma.jpg";
import img5 from "./assets/images/tommy.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Time/>
    <div className='container'>
      <div><h1>Shoes Brand store</h1></div>
      <div className='card'>
          <Shoes name="guess" size={46} price={"150$"} img={img1} />
        </div>
        <div className='card'>
          <Shoes name="piere cardin" size={39} price={"300$"} img={img2} />
        </div>
        <div className='card'>
          <Shoes name="tommy" size={38} price={"250$"} img={img3} />
        </div>
        <div className='card'>
          <Shoes name="nike" size={40} price={"100$"} img={img4} />
        </div>
        <div className='card'>
          <Shoes name="puma" size={37} price={"50$"} img={img5} />
        </div>
    </div>
      </header>
    </div>
  );
}

export default App;
