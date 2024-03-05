import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter  as Router, Routes, Route, Link} from 'react-router-dom';
// import Employees from './components/Employees';
// import Home from './components/Home';
// import Departments from './components/Departments';
// import Contact from './components/Contact';
// import About from './components/About';
// import NotFound from './components/NotFound';
// import Details from './components/Details';
// import ProtectedRoute from './components/ProtectedRoute';
// import Login from './components/Login';
import { Provider } from 'react-redux';
import bankStore from './stores/BankStore';
import cartStore from './stores/CartStore';

// const Routing = (
//   <Router>

//     <div style = {{"textAlign" : "center"}}>
//       <h3>Routing Implementation in React JS</h3>
//       <hr/>
//     <Link to= "/">Home</Link> |
//     <Link to= "/Employees">Employees</Link> |
//     <Link to= "/Departments">Departments</Link> |
//      <Link to= "/Contact">Contact</Link> |
//     <Link to= "/About">About</Link> |
//     <Link to= "/Hello"></Link> |
//     <Link to="/Login">Login</Link> |

//     </div>

//     <Routes>
//       <Route path="" element={<Home />} />
//       <Route path="Employees" element={  

//       <ProtectedRoute  returnUrl="/Employees">
//       <Employees />
//       </ProtectedRoute>  
//         } />
//       <Route path="Departments" element={
//  <ProtectedRoute  returnUrl="/Departments">
//  <Departments />
//  </ProtectedRoute>        
//       } />
//       <Route path="contact" element={<Contact />} />
//       <Route path="about" element={<About />} />
//       <Route path="login" element={<Login />} />
//       <Route path="details/:id" element={<Details />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>

//   </Router>
// );



const root = ReactDOM.createRoot(document.getElementById('root'));

// Perform or dispatch an action :  CREATE
cartStore.dispatch({type:"CREATE"});  

root.render(
  <React.StrictMode>
    {/* Step3: Use <Provider/>  to share the store to components */}
     <Provider store={cartStore}>
        <App  />
     </Provider>  
  </React.StrictMode>    
   
);
    

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
