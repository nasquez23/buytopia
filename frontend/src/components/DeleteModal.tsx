import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { DeleteModalProps } from "../types/types";

const DeleteModal: FC<DeleteModalProps> = ({
  open,
  objectId,
  onClose,
  title,
  message,
  deleteFunction,
  isDeleting,
  error,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{ bgcolor: "#db4444", color: "white", fontFamily: "Montserrat" }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ width: "50vh", mt: 2 }}>
          <Typography sx={{ fontFamily: "Montserrat" }}>{message}</Typography>
        </Box>
      </DialogContent>
      {error && (
        <Box sx={{ py: 2 }}>
          <Typography color="error" sx={{ textAlign: "center" }}>
            An error occurred while deleting the item
          </Typography>
        </Box>
      )}
      <DialogActions>
        {isDeleting ? (
          <Box sx={{ display: "flex", mx: "auto", py: 2 }}>
            <CircularProgress sx={{ color: "#db4444" }} />
          </Box>
        ) : (
          <>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
            >
              <Button
                sx={{
                  color: "gray",
                  "&:hover": { bgcolor: "#e8e8e8" },
                  cursor: "pointer",
                }}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                onClick={() => deleteFunction(objectId)}
                sx={{
                  color: "#db4444",
                  "&:hover": { bgcolor: "#e8e8e8" },
                  cursor: "pointer",
                }}
              >
                Delete
              </Button>
            </Box>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
