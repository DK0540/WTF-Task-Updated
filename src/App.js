import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Home from './Pages';
import About from './Pages/About';
import Gyms from './Pages/Gyms';
import Service from './Pages/Service';
import SideBars from './components/Navbar/SideBars';
import View from './Pages/View';


function App() {
  return (
    <div className='App'>
    <Router >
      <Navbar/>
      <Routes>
        <Route exact path='/view' element={<View/> }/>
        <Route exact path='/sidebars' element={ <SideBars/> }/>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/gym" element={<Gyms/>}/>
        <Route exact path = "/Service" element={<Service/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
