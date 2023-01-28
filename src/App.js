import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes} from "react-router-dom"
import { Container } from 'react-bootstrap';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import UpdateExpense from './components/UpdateExpense';
import LoginButton from './components/Login';
import UserList from './components/UserList';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AddTrip from './components/AddTrip';
import TripList from './components/TripList';


function App() {
  return (
    <div className="App">
  
     
      <BrowserRouter>
      
        <Routes>
        
          <Route path='/expense-list' element={<ExpenseList />}></Route>
          <Route path='/add-expense' element={<AddExpense />}></Route>
          <Route path='/update-expense' element={<UpdateExpense />}></Route>
          <Route path='/user-list' element={<UserList />}></Route>
          <Route path='/' element={<Register/>}></Route>
          <Route path='/login' element={<Login />}></Route>

          {/* Home Page */}
          <Route path='/home' element={<Home />}></Route>

          {/* Trips */}
          <Route path='/add-trip' element={<AddTrip />}></Route>
          <Route path='/trip-list' element={<TripList />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <h1>asdf</h1> */}
      
      
    
      
    </div>
  );
}

export default App;
