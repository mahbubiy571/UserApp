import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ setUsers }) {
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
  );
}

export default Form;
