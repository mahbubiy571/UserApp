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
      <form
        className="bg-white px-6 py-8 shadow-lg ring-gray-900/5 max-w-[400px] mx-auto card card-body"
        ref={form}
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block">Name:</label>
          <input
            className="input input-border focus:outline-none focus:border-blue-500 shadow-blue-500 focus:shadow-lg focus:shadow-blue-400/50 rounded"
            type="text"
            ref={name}
          />
        </div>
        <div>
          <label className="block">Email:</label>
          <input
            className="input input-border focus:outline-none focus:border-blue-500 shadow-blue-500 focus:shadow-lg focus:shadow-blue-400/50 rounded"
            type="email"
            ref={email}
          />
        </div>
        <div>
          <label className="block">Age:</label>
          <input
            className="input input-border focus:outline-none focus:border-blue-500 shadow-blue-500 focus:shadow-lg focus:shadow-blue-400/50 rounded"
            type="number"
            ref={age}
          />
        </div>
        <button className="btn btn-warning mt-5 hover:text-neutral-500 ml-auto mr-auto w-[120px]">
          Add User
        </button>
      </form>
      <ul className="grid grid-cols-3 gap-14 px-20 py-10">
        {users.map((user) => {
          return (
            <li
              className="card card-body shadow-lg hover:shadow-2xl hover:transition px-10 py-10"
              key={user.id}
            >
              <h3 className="card-title text-2xl card-actions justify-center">
                {user.name}
              </h3>
              <p className="my-3 text-gray-500 card-actions justify-center">
                {user.email}
              </p>
              <p className="my-1 text-neutral-600 text-[18px] card-actions justify-center">
                {user.age} age
              </p>
              <button
                className="btn btn-secondary w-[100px] ml-auto mr-auto hover:text-fuchsia-800"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
