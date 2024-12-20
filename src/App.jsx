import React, { useState } from "react";
import SignUp from "./components/SignUp";
import UsersList from "./components/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    const newuser = users.filter((user) => user.id !== id);
    setUsers(newuser);
  };
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:h-screen">
        <SignUp setUsers={setUsers} />
        <UsersList users={users} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default App;
