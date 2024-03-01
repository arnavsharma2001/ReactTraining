import { useState } from "react";
import { dataSericeObj } from "../services/dataService2";



function EmpList() {

    const [EmpArray, setEmpArray] = useState([]);

    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");

    function getEmpsClick() {

        dataSericeObj.getAllEmployees().then(resData => {
            setEmpArray(resData.data);
        });
    }

    function addEmpClick() {


        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;

        dataSericeObj.addEmp(empObj).then(resData => {
            alert("New Emp Added!");
            getEmpsClick();
            clearFields();

        });
    }

    function clearFields() {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }


    function deleteEmpClick(eno) {

        dataSericeObj.deleteEmp(eno).then(resData => {
            alert("Delete user?");
            getEmpsClick();

        }
        );
    }

    function selectClick(eno) {
        dataSericeObj.getEmpById(eno).then(resData => {
            let empObj = resData.data;
            setEmpno(empObj.empno);
            setEname(empObj.ename);
            setJob(empObj.job);
            setSal(empObj.sal);
            setDeptno(empObj.deptno);

        });

    }

    function updateEmpClick() {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;

        dataSericeObj.updateEmp(empObj).then(resData => {
            getEmpsClick();
            clearFields();
        });
    }


    let resultArray = EmpArray.map(item => {
        return <tr>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
            <td align="center">
                <a href="javascript:void(0);" onClick={() => { selectClick(item.empno) }}>Select</a>|
                <a href="javascript:void(0);" onClick={() => { deleteEmpClick(item.empno) }}>Delete</a>
            </td>
        </tr>;
    });

    return (
        <>
            <h3> Emp CRUD Operations using Axios</h3>
            <hr />

            <input placeholder="Empno" type="text"
                value={empno} onChange={(e) => setEmpno(e.target.value)} />

            <input placeholder="Ename" type="text"
                value={ename} onChange={(e) => setEname(e.target.value)} />

            <input placeholder="Job" type="text"
                value={job} onChange={(e) => setJob(e.target.value)} />

            <input placeholder="Salary" type="text"
                value={sal} onChange={(e) => setSal(e.target.value)} />

            <input placeholder="Dept No" type="text"
                value={deptno} onChange={(e) => setDeptno(e.target.value)} />


            <hr />

            <input type="button" value="Get Emps" onClick={getEmpsClick} />
            <input type="button" value="Add Emps" onClick={addEmpClick} />
            <input type="button" value="Update Emps" onClick={updateEmpClick} />

            <hr />
            <table border="2" width="500">
                <tr>
                    <th>Emp Number</th>
                    <th>Emp Name</th>
                    <th>Job</th>
                    <th>Salary</th>
                    <th>Dept Number</th>


                    <th></th>
                </tr>

                {resultArray}
            </table>


        </>

    );
}

export default EmpList;