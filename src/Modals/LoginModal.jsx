import React from "react";
import Modal from "./Modal";
import Button from "../components/Button";
import Input from "../components/Input";

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
      <Input
        type="email"
        name="email"
        value={state.email}
        placeholder="Email"
        handleChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        value={state.password}
        placeholder="Password"
        handleChange={handleChange}
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
