import React from "react";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";

export default function SimpleModal() {
  const body = <CircularProgress style={{ color: "white", outline: "none" }} />;

  return (
    <div>
      <Modal
        open={true}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
