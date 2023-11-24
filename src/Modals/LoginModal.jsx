import React from "react";
import Modal from "./Modal";
import Button from "../components/Button";

const LoginModal = ({ open, handleClose }) => {
  const [state, setState] = React.useState({ email: "", password: "" });

  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  return (
    <Modal
      title="Login"
      id="alert-dialog-title"
      descID="alert-dialog-description"
      open={open}
      handleClose={handleClose}
    >
      <input
        type="email"
        name="email"
        value={state.email}
        className="border border-[rgba(0, 0, 0, .2)] rounded-md p-2 mt-0 w-full outline-none sm:p-3"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={state.password}
        className="border border-[rgba(0, 0, 0, .2)] rounded-md p-2 mt-3 w-full outline-none sm:p-3"
        placeholder="Password"
        onChange={handleChange}
      />
      <Button
        label="login"
        classname="w-full text-center uppercase text-white bg-[dodgerblue] mt-3 hover:opacity-80 p-2 rounded-md sm:p-3 font-semibold"
      />
      <p className="mt-3 text-[#070707] text-center">
        Don't have an account?{" "}
        <span className="font-semibold text-[dodgerblue] cursor-pointer underline">
          Signup
        </span>
      </p>
    </Modal>
  );
};

export default LoginModal;
