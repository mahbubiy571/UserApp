import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
    { id: 4, name: "Diana", age: 28, email: "diana@example.com" },
    { id: 5, name: "Ethan", age: 27, email: "ethan@example.com" },
  ]);

  const handleDelete = (id) => {
    const filteredUseres = users.filter((user) => user.id != id);
    setUsers(filteredUseres);
  };

  const name = useRef();
  const email = useRef();
  const age = useRef();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => {
      return [
        ...prev,
        {
          name: name.current.value,
          email: email.current.value,
          age: age.current.value,
          id: uuidv4(),
        },
      ];
    });
    form.current.reset();
  };

  return (
    <>
      <form className="container__form" ref={form} onSubmit={handleSubmit} action="">
        <div className="form-wrapper">
          <label className="form-label" htmlFor="">Name:</label>
          <input className="form-input" type="text" ref={name} />
        </div>
        <div className="form-wrapper">
          <label className="form-label" htmlFor="">Email:</label>
          <input className="form-input" type="email" ref={email} />
        </div>
        <div className="form-wrapper">
          <label className="form-label" htmlFor="">Age:</label>
          <input className="form-input" type="number" ref={age} />
        </div>
        <button className="add-btn">Add User</button>
      </form>
      <ul user-list>
        {users.map((user) => {
          return (
            <li className="user-item" key={user.id}>
              <h3 className="user-name">{user.name}</h3>
              <p className="user-email">{user.email}</p>
              <p className="user-age">{user.age} age</p>
              <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
