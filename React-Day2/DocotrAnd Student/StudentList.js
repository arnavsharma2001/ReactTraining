function StudentList(){

     // Question 1:
 
  let sid= 21;
  let sname= "Arnav";
  let course= "React";
  let age = 22;
  let total= 100;

  return (
    <>
    
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
    </>
  );
    
}

export default  StudentList;