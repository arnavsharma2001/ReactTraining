import logo from './logo.svg';
import './App.css';
import Login from './components/Login1'
import DoctorsList from './components/DoctorsList';
import StudentList from './components/StudentList';
//import Demo from './components/Demo';
import Doctors from './components/Doctors';
import Demo1 from './components/Demo1';
import Product from './components/Product';
import Crud from './components/Crud';
import Employee from './components/Employee';
import Axios1 from './components/Axios1';
import Axios2 from './components/Axios2';
import EmpList from './components/EmpList';
import React from 'react';
import BankApp from './components/BankApp'; 
import Cart from './components/Cart';
import { useSelector } from "react-redux";



function App() 
{   
  
  let currentCount = useSelector((state) => state.count);

 
      return(
        <>
         
             <div>
        <header>
           
            React-Redux Cart
        </header>
        <h1>Items in Your Cart are:{(currentCount)}</h1> 
        <div className="cart"></div>
        </div>
        <Cart/>
        </>
        );
}

export default App;
 
// function App() {
//   return (
//     <div style={{ textAlign: "center" }} >
//       <h3>Welcome to SPA using React JS</h3>
//       <img src="/Images/Banner.jpg" width="90%" height="250" alt="Alternate text" />
//     </div>
//   );
// }

// export default App;