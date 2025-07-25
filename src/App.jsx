import { useState } from "react";
import Form from "./components/Form";
import UsersList from "./components/UsersList";
import data from "./data";

function App() {
  const [users, setUsers] = useState(data);

  return (
    <>
      <Form setUsers={setUsers} />;
      <UsersList setUsers={setUsers} users={users} />
    </>
  );
}

export default App;
