import User from "./User";

function UsersList({users, setUsers}) {
  return (
    <ul className="grid grid-cols-3 gap-14 px-20 py-10">
        {users.map((user) => {
          return <User key={user.id} user={user} users={users} setUsers={setUsers}/>;
        })}
      </ul>
  )
}

export default UsersList