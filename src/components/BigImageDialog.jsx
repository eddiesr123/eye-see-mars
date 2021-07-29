import React from "react";
import Dialog from "@material-ui/core/Dialog";

const BigImageDialog = ({ children, handleClose, open }) => {
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {children}
      </Dialog>
    </div>
  );
};

export default BigImageDialog;
