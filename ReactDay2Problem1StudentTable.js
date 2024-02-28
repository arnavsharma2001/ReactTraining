import logo from './logo.svg';
import './App.css';

function App() {

  //Question 1
 let studentArray =[
  {sid:1001, sname:"Arnav", course:"CSE", age: 23, totalMarks:128},
  {sid:1002, sname:"Aryan", course:"ECE", age: 21, totalMarks:18},
  {sid:1003, sname:"Chatak", course:"Mech", age: 18, totalMarks:108},
  {sid:1004, sname:"Krishna", course: "Civil" ,age: 23, totalMarks:98},
  {sid:1005, sname:"Anu", course:"CSE", age: 22, totalMarks:88},
 ];

 let resultArray = studentArray.map(item=>
  {
    return(
    <tr>
      <td>{item.sid}</td>
      <td>{item.sname}</td>
      <td>{item.course}</td>
      <td>{item.age}</td>
      <td>{item.totalMarks}</td>
    </tr>);
  })




  return (
    <>
    <h3>Assignment</h3>
    <hr/>
    <h3> Problem 1</h3>
    <div>
    <table  border="1"  width="400">

<tr>
  <th>Student ID</th>
  <th>Student Name</th>
  <th>Course</th>
  <th>Age</th>
  <th>Total Marks</th>
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
