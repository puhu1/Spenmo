import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import {
  Button,
  DialogActions,
  DialogContent,
  FormControl,
  Input,
} from "@material-ui/core";

export default class AddNewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? true : true,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="simple-dialog-title">Add New Card</DialogTitle>
          <DialogContent>
            <FormControl>
              <Input placeholder="Card Holder Name" />
            </FormControl>
            <FormControl>
              <Input placeholder="Last Four Digit" />
            </FormControl>
            <FormControl>
              <Input placeholder="Expiry Date" />
            </FormControl>
            <DialogActions>
              <Button variant="contained" onClick={this.handleClose}>
                Close
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
