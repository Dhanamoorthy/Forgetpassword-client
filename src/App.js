import logo from './logo.svg';

import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import ForgetPassword from './Components/ForgetPassword';
import Dashboard from './Components/Dashboard';
import ResetPassword from './Components/ResetPassword';
import Home from './Components/Home';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/forgot-password' element={<ForgetPassword/>}/>
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path='/reset-password/:id/:token' element={<ResetPassword/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
