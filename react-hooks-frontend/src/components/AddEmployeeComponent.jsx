import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };
    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then((res) => {
          navigate.push("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeService.createEmployee(employee)
        .then((res) => {
          console.log(res.data);
          navigate("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    useEffect(() => {
      EmployeeService.getEmployeeById(id)
        .then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmailId(res.data.emailId);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const title = () => {
      if (id) {
        return <h2 className="text-center">Update Employee</h2>;
      } else {
        return <h2 className="text-center">Add Employee</h2>;
      }
    };
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {title()}
              <div className="card-body">
                <form>
                  <div className="form-group mb-2">
                    <label>First Name:</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-group mb-2">
                    <label>Last Name:</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-group mb-2">
                    <label>Email Id:</label>
                    <input
                      type="text"
                      placeholder="Email Id"
                      name="emailId"
                      className="form-control"
                      value={emailId}
                      onChange={(e) => setEmailId(e.target.value)}
                    ></input>
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={(e) => saveOrUpdateEmployee(e)}
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
      </div>
    );
  };
};
export default AddEmployeeComponent;
