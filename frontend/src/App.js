import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar'
import SignUp from './Components/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path ="/home" element = {<h1>Home</h1>}/>
          <Route path = "/signUp" element = {<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
