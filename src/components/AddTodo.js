import React, {Component} from 'react';

import {withStyles} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = () => ({
    alignRight: {
        textAlign: 'right'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: '500px',
        padding: '15px;'
    },
    marginTop: { marginTop: '20px' }
});

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = { open: false };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    handleOpen () {
        this.setState({ open: true });
    };

    handleClose () {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid item xs={12} className={classes.alignRight}>
                    <Button variant="contained" color="primary" onClick={this.handleOpen}>NEW TODO</Button>
                </Grid>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <form onSubmit={this.props.addTodo} className={classes.form}>
                        <DialogTitle id="form-dialog-title">New Todo</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Add a new todo to your list.
                            </DialogContentText>
                            <TextField
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                fullWidth
                                required
                                className={classes.marginTop}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button type="Submit" color="primary">
                                Add
                            </Button>
                            <Button onClick={this.handleClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(AddTodo);