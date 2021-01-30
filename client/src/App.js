import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  let [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = () => {
    fetch("/students")
      .then(response => response.json())
      .then(students => {
        setStudents(students);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = event => {
    let { firstname, lastname } = event.target;
    //something else
  };

  //I've forgotten how to do anything I'm sorry!!!
  const handleSubmit = event => {
    event.preventDefault();
    addStudent();
    setStudents();
  };

  const addStudent = () => {
    let newStudent = { firstname, lastname };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="App">
      <h1>CodeOp's Facebook</h1>
      <h2>Current students</h2>
      <ul>
        {students.map(s => (
          <li>
            {s.firstname} {s.lastname} <button>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add new student</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="firstname">First Name: </label>
          <input
            name="firstname"
            type="text"
            className="NameInput"
            onChange={handleChange}
          ></input>
        </p>
        <p>
          <label htmlFor="lastname">Last Name: </label>
          <input
            name="lastname"
            type="text"
            className="NameInput"
            onChange={handleChange}
          ></input>
        </p>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
