import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function DialogDefault({}) {
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const handleOpen = () => setOpen(!open);

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, username, email, password };

    // Update user in the parent state
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === user.id ? updatedUser : u))
    );

    // Close the modal
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="text-black px-3 py-2"
      >
        Update
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-white mx-auto w-[50%] mt-10 px-6"
      >
        <DialogHeader>Update User Information</DialogHeader>
        <DialogBody>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Username Input */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-black mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                className="w-full px-4 py-2 border border-primary20 rounded focus:outline-none focus:ring-2 focus:ring-primary40"
                placeholder="Enter your username"
                onChange={handleUsername}
              />
            </div>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="w-full px-4 py-2 border border-primary20 rounded focus:outline-none focus:ring-2 focus:ring-primary40"
                placeholder="Enter your email"
                onChange={handleEmail}
              />
            </div>
            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                className="w-full px-4 py-2 border border-primary20 rounded focus:outline-none focus:ring-2 focus:ring-primary40"
                placeholder="Enter your password"
                onChange={handlePassword}
              />
            </div>
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
