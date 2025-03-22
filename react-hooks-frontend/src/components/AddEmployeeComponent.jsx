import React, { useState } from "react";

export const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };
    console.log("employee => " + JSON.stringify(employee));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3"></div>
          <h2 className="text-center">Add Employee</h2>
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
                onClick={(e) => saveEmployee(e)}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddEmployeeComponent;
