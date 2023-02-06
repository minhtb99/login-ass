import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home/home';
import Login from './page/login/login';

function App() {
  return (
    <Routes>
       <Route path="/" element={<Login />}></Route>
       <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
