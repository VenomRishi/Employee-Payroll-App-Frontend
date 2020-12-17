import React, { Component } from "react";
import EmployeeService from "../service/EmployeeService";

export class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      imagePath: "",
      gender: "male",
      salary: 0,
      startDate: "",
      department: "",
      notes: "",
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        name: employee.name,
        imagePath: employee.imagePath,
        gender: employee.gender,
        salary: employee.salary,
        startDate: employee.startDate,
        department: employee.department,
        notes: employee.notes,
      });
    });
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleImagePathChange = (event) => {
    this.setState({
      imagePath: event.target.value,
    });
  };
  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
  handleSalaryChange = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleStartDateChange = (event) => {
    this.setState({
      startDate: event.target.value,
    });
  };
  handleDepartmentChange = (event) => {
    this.setState({
      department: event.target.value,
    });
  };
  handleNotesChange = (event) => {
    this.setState({
      notes: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    // alert(`${this.state.name} ${this.state.imagePath} ${this.state.gender}`)
    EmployeeService.updateEmployee(this.state, this.state.id)
      .then((res) => {
        alert("Employee is updated successfully of Name : " + res.data.name);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
    event.preventDefault();
  };

  handleCancelClick = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div
              className="card col-md-6 offset-md-3 offset-md-3"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <h3 className="text-center">Update Employee</h3>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleNameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Image Path</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.imagePath}
                      onChange={this.handleImagePathChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      className="form-control"
                      value={this.state.gender}
                      onChange={this.handleGenderChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Salary</label>
                    <input
                      className="form-control"
                      type="number"
                      value={this.state.salary}
                      onChange={this.handleSalaryChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Start Date</label>
                    <input
                      className="form-control"
                      type="date"
                      value={this.state.startDate}
                      onChange={this.handleStartDateChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Department</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.department}
                      onChange={this.handleDepartmentChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Notes</label>
                    <input
                      className="form-control"
                      type="text"
                      value={this.state.notes}
                      onChange={this.handleNotesChange}
                    />
                  </div>

                  <div className="form-group">
                    <button className="btn btn-success" type="submit">
                      Update Employee
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.handleCancelClick}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEmployeeComponent;
