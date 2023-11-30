import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router><NavBar/></Router>
    <Router><Home/></Router>
    </div>
  );
}

export default App;
