import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IoCloseOutline } from "react-icons/io5";

// "alert-dialog-title"
// alert-dialog-description

const Modal = ({ open, id, title, descID, children, handleClose }) => {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={id}
        aria-describedby={descID}
      >
        <DialogTitle id={id} className="flex justify-between">
          {title}{" "}
          <span className="mt-1 cursor-pointer">
            <IoCloseOutline onClick={handleClose} size={25} />
          </span>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Modal;
