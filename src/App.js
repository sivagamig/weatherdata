import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      
  <Router>
        <Routes>
        <Route exact path="/" element={<Login/>}/> 
        <Route exact path="/home" element={<Home/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
