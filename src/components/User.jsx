function User({ user, users, setUsers }) {
  const handleDelete = (id) => {
    const filteredUseres = users.filter((user) => user.id != id);
    setUsers(filteredUseres);
  };

  return (
    <li className="card card-body shadow-lg hover:shadow-2xl hover:transition px-10 py-10">
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
}

export default User;
