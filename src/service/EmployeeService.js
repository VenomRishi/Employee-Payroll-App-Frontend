import Axios from "axios";

const BASE_URL = "http://localhost:8089";
const ADD_EMPLOYEE_URL = "/employee/add";
const GET_EMPLOYEES = "/employee/get";
class EmployeeService {
  getEmployees() {
    return Axios.get(BASE_URL + GET_EMPLOYEES);
  }
  addEmployee(employee) {
    return Axios.post(BASE_URL + ADD_EMPLOYEE_URL, employee);
  }
}

export default new EmployeeService();
