import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton
} from "@rmwc/dialog";

import "@material/dialog/dist/mdc.dialog.css";
import "@material/button/dist/mdc.button.css";

export default ({ addContactModal, handleCloseAddContact }) => {
  return (
    <Dialog
      open={addContactModal}
      onClose={evt => {
        console.log(evt.detail.action);
        handleCloseAddContact();
      }}
    >
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogContent>This is a standard dialog.</DialogContent>
      <DialogActions>
        <DialogButton action="close">Cancel</DialogButton>
        <DialogButton action="accept" isDefaultAction>
          Sweet!
        </DialogButton>
      </DialogActions>
    </Dialog>
  );
};
