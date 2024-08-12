import { Alert, Slide, SlideProps, Snackbar } from "@mui/material";
import { FC } from "react";
import { NotificationProps } from "../types/types";

const Transition = (props: SlideProps) => {
  return <Slide {...props} direction="down" />;
};

const Notification: FC<NotificationProps> = ({
  open,
  message,
  onClose,
  severity,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      TransitionComponent={Transition}
      key={open ? "open" : "close"}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
