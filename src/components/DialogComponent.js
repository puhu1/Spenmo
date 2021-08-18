import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Button, DialogActions, DialogContent } from "@material-ui/core";

export default class DialogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? true : true,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    console.log(this.props.name)
    return (
      <div>
        <Dialog
          // style={{ color: this.props.card_data.color }}
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="simple-dialog-title">
            Name:{this.props.card_data.card_name}
          </DialogTitle>
          <DialogContent>
            <p style={{ color: this.props.card_data.color }}>
              Last Four Digit: {this.props.card_data.card_last_four}
            </p>
            <p>Expiry Date:{this.props.card_data.expiry}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
