import React from "react";
import UserCard from "./UserCard";

const UsersList = ({ users, handleDelete }) => {
  return (
    <div className=" w-[50%] flex items-center justify-center p-6">
      <div className="w-full rounded-lg p-8 space-y-8">
        <h1 className="text-5xl font-bold text-center text-primary30">
          User Information
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {users.map((user) => {
            return (
              <UserCard
                username={user.username}
                email={user.email}
                password={user.password}
                id={user.id}
                key={user.id}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
