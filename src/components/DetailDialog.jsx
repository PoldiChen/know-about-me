import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import BasicList from "./BasicList";

class DetailDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: props.dialogOpen,
            dialogTitle: props.dialogTitle,
            diallogContent: props.dialogContent
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            dialogOpen: props.dialogOpen,
            dialogTitle: props.dialogTitle,
            dialogContent: props.dialogContent
        });
    }

    handleClose = () => {
        this.setState({ dialogOpen: false });
    };

    render() {
        return (
            <Dialog open={this.state.dialogOpen}
                    fullWidth={true}
                    maxWidth={"sm"}
            >
                <DialogTitle>{this.state.dialogTitle}</DialogTitle>
                <DialogContent>
                    <BasicList />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

}

export default DetailDialog;