import React from "react";
import { DialogDefault } from "./Edit";

const UserCard = ({ username, email, password, id, handleDelete }) => {
  return (
    <>
      <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition transform space-y-4">
        <p className="text-lg font-medium text-blk">
          Name: <span className="font-normal text-gray-700">{username}</span>
        </p>
        <p className="text-lg font-medium text-blk">
          Email: <span className="font-normal text-gray-700">{email}</span>
        </p>
        <p className="text-lg font-medium text-blk">
          Password <span className="font-normal text-gray-700">{password}</span>
        </p>
        <div className="flex justify-end space-x-4">
          <DialogDefault />
          <button
            className="px-4 py-2 bg-red-500 text-white font-medium text-sm rounded hover:bg-red-600 transition"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default UserCard;
