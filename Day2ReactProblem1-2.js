import logo from './logo.svg';
import './App.css';

function App() {


  // Question 1:
 
  let sid= 21;
  let sname= "Arnav";
  let course= "React";
  let age = 22;
  let total= 100;

  //Question 2
 let doctorArray =[
  {doctorId:1001, doctorname:"Arnav", designation:"cardio", experience: 23,contactNumber: 987654321},
  {doctorId:1002, doctorname:"Aryan", designation:"ortho", experience: 21, contactNumber: 9870654321},
  {doctorId:1003, doctorname:"Chatak", designation:"optha", experience: 18,contactNumber: 987654321},
  {doctorId:1004,doctorname:"Krishna", designation: "uro" ,experience: 23,contactNumber: 9887654321},
  {doctorId:1005, doctorname:"Anu", designation:"neuro", experience: 22,contactNumber: 998767754321},
 ];

 let resultArray = doctorArray.map(item=>


  {
    return(
    <tr>
      <td>{item.doctorId}</td>
      <td>{item.doctorname}</td>
      <td>{item.designation}</td>
      <td>{item.experience}</td>
      <td>{item.contactNumber}</td>
    </tr>);
  })




  return (
    <>
    <h3>Assignment</h3>
    <hr/>

    <h3>Problem 1</h3>
    <div>
    <table border="">
    <tr><th colSpan="2">Student Details</th></tr>
    <tr><td >Student Id </td> <td>{sid}</td></tr>
    <tr><td>Student Name   </td> <td>{sname}</td></tr>
    <tr><td>Course</td> <td>{course}</td></tr>
    <tr><td>Age</td> <td>{age}</td></tr>
    <tr><td>Total</td> <td>{total}</td></tr>
  </table>
    </div>
    <hr/>

    <h3> Problem 2</h3>
    <div>
    <table  border="1"  width="400">

<tr>
  <th>Doctor ID</th>
  <th>Doctor Name</th>
  <th>Designation</th>
  <th>Experience</th>
  <th>Contact Number</th>
</tr>
{resultArray}
</table>
<hr/>
          </div>
          <hr/>

</>
  );
}

export default App;
