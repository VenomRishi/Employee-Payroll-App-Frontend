import React, { Component } from "react";
import EmployeeService from "../service/EmployeeService";

export class GetEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      console.log(res);
      this.setState({
        employees: res.data,
      });
    });
  }

  
  handleUpdateEmployeeClick(id) {
    this.props.history.push(`/add-update-employee/${id}`)
  }


  render() {
    return (
      <div className="container">
        <h2 className="text-center">Employee Payroll List</h2>
        <div className="row">
          <table className="table table-stripped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image Path</th>
                <th>Gender</th>
                <th>Salary</th>
                <th>Start Date</th>
                <th>Department</th>
                <th>Notes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.imagePath}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.startDate}</td>
                  <td>{employee.department}</td>
                  <td>{employee.notes}</td>
                  <td>
                  <button
                      onClick={() =>
                        this.handleUpdateEmployeeClick(employee.id)
                      }
                      className="btn btn-info"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default GetEmployeeComponent;
