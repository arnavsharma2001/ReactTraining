import { useState} from "react";

function  Employee()
{ 

    const[empArray,setEmpArray] = useState([]);

    const[empno, setEmpNo] = useState("");
    const[ename, setEName] = useState("");
    const[job, setJob] = useState("");
    const[sal, setSal] = useState("");
    const[deptno, setDeptNo] = useState("");

    let data = [
        { empno: 10, ename: "Arnav", job: "Developer", sal: 50000, deptno:101},
        { empno: 20, ename: "Aryan", job: "Finance", sal: 150000, deptno:102},
        { empno: 30, ename: "Chatak", job: "Accountant", sal: 250000, deptno:103},
       
    ];

    function getClick(){
        setEmpArray(data);
    }

    function addClick(){
        let empObj={};

        empObj.empno = empno;
        empObj.ename= ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno =deptno;

        let tempArray = [...empArray];
        tempArray.push(empObj);       
        setEmpArray( tempArray );

        clearFields()
        
}

function  clearFields()
    {
        setEmpNo("");
        setEName("");
        setJob("");
        setSal("");
        setDeptNo("");

    }

    function deleteClick(eno)
    {
        let tempArray = [...empArray];
        let index = tempArray.findIndex(item => item.empno==eno);
        tempArray.splice(index,1);

        setEmpArray(tempArray);
    }

    function selectClick(eno)
    {
        let empObj = empArray.find(item=> item.empno==eno);
        setEmpNo(empObj.empno);
        setEName(empObj.ename);
        setJob(empObj.job);
        setSal(empObj.sal);
        setDeptNo(empObj.deptno);

    }


    function updateClick(){
         let tempArray = [...empArray];
         let index = tempArray.findIndex(item=> item.empno == empno);
         
         tempArray[index].ename = ename;
         tempArray[index].job = job;
         tempArray[index].sal = sal;
         tempArray[index].deptno = deptno;

         setEmpArray(tempArray);
         clearFields();
    }

    let resultArray = empArray.map(item => {
        return <tr>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
            <td align="center">
                <a href="javascript:void(0);" onClick={() => {selectClick(item.empno)}}>Select</a>|
                <a href="javascript:void(0);" onClick={() => {deleteClick(item.empno)}}>Delete</a>
            </td>
        </tr>;
    });


    return(
        <>

<h3> Employeee Crud Operations in React</h3>	      
            <hr/> 

            <input placeholder="Employee Number" type="text"
                value={empno} onChange={(e) => setEmpNo(e.target.value)} />

            <input placeholder="Employee Name" type="text"
                value={ename} onChange={(e) => setEName(e.target.value)} />

            <input placeholder="Job" type="text"
                value={job} onChange={(e) => setJob(e.target.value)} />

            <input placeholder="Salary" type="text"
                value={sal} onChange={(e) => setSal(e.target.value)} />   

            <input placeholder="Department Number" type="text"
                value={deptno} onChange={(e) => setDeptNo(e.target.value)} /> 
             <hr />


             <input type="button" value="Get Depts" onClick={getClick} />
            <input type="button" value="Add Dept" onClick={addClick} />
            <input type="button" value="Update Dept" onClick={updateClick} />
            <hr/>

            <table border="2" width="500">
                <tr>
                    <th>Employee Number</th>
                    <th>Employee Name</th>
                    <th>Job</th>
                    <th>Salary</th>
                    <th>Department Number</th>
                    <th></th>
                </tr>

                {resultArray}
            </table>


        </>

    );
}

export default Employee;