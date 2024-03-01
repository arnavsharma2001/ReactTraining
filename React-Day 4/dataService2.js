import axios from 'axios';

export let dataSericeObj = 
{
    getAllEmployees,
   addEmp,
    deleteEmp,
    getEmpById,
    updateEmp
};

let url = "http://localhost:4000/emps/";

function getAllEmployees()
{
    return axios.get(url);
}

function addEmp(empObj)
{
    return axios.post(url, empObj);
}

function deleteEmp(eno)
{
    return axios.delete(url + eno);
}

function getEmpById(eno)
{
    return axios.get(url + eno);
}

function updateEmp(updatedEmptObj) {
    return axios.put(url + updatedEmptObj.empno, updatedEmptObj);
}

