import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate, useParams, Link } from "react-router-dom";

export const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id)
        .then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmailId(res.data.emailId);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailId };

    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then(() => navigate("/employees"))
        .catch((error) => console.log(error));
    } else {
      EmployeeService.createEmployee(employee)
        .then(() => navigate("/employees"))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center">
            {id ? "Update Employee" : "Add Employee"}
          </h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label>First Name:</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label>Last Name:</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label>Email Id:</label>
                <input
                  type="text"
                  placeholder="Email Id"
                  className="form-control"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <button
                className="btn btn-success"
                onClick={saveOrUpdateEmployee}
              >
                Save
              </button>
              <Link to="/employees" className="btn btn-danger ms-2">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
