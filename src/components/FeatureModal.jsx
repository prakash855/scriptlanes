import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ open, handleClose }) {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Feature Contains
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            1.Date Picker with api-integration
          </Typography>
          <Typography gutterBottom>
            2.Date Validaton; cannot receive previous dates
          </Typography>
          <Typography gutterBottom>
            3.Searching has been implemented, along with proper message in case
            of data absence, or when entered text is not present!
          </Typography>
          <Typography gutterBottom>
            4.Sorting via columns like vaccine & Available Capacity
          </Typography>
          <Typography gutterBottom>
            5.Proper message when data is not found for particular date
          </Typography>
          <Typography gutterBottom>
            5.Table depicted with data like No, Name, Vaccine, Available
            Capacity & array of Slots
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Perfect, it contains all the features!
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
