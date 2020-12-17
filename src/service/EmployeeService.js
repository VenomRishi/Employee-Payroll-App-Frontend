import Axios from "axios";

const BASE_URL = "http://localhost:8089";
const ADD_EMPLOYEE_URL = "/employee/add";
const GET_EMPLOYEES_URL = "/employee/get";
const GET_EMPLOYEE_URL = "/employee/get/";
const UPDATE_EMPLOYEE_URL = "/employee/update/";

class EmployeeService {
  getEmployees() {
    return Axios.get(BASE_URL + GET_EMPLOYEES_URL);
  }
  addEmployee(employee) {
    return Axios.post(BASE_URL + ADD_EMPLOYEE_URL, employee);
  }
  getEmployeeById(employeeId) {
    return Axios.get(BASE_URL + GET_EMPLOYEE_URL + employeeId);
  }
  updateEmployee(employee, employeeId) {
    return Axios.put(BASE_URL + UPDATE_EMPLOYEE_URL + employeeId, employee);
  }
}

export default new EmployeeService();

// http://localhost:8089/employee/get/2
