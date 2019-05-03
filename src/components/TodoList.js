import React from 'react';
import PropTypes from "prop-types";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    }
});

const TodoList = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">#</TableCell>
                        <TableCell>Todo</TableCell>
                        <TableCell align="center">Created At</TableCell>
                        <TableCell align="center">Completed</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.todos.map((todo, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">{index + 1}</TableCell>
                            <TableCell component="th" scope="row">{todo.name}</TableCell>
                            <TableCell align="center">{todo.createdAt}</TableCell>
                            <TableCell align="center"><Switch
                                checked={todo.status}
                                onChange={() => props.toggleTodo(index)}
                                color="primary"
                            /></TableCell>
                            <TableCell align="center">
                                <Button variant="contained" color="secondary" onClick={() => props.removeTodo(index)}>Remove</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

TodoList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoList);