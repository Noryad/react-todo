import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import TodoList from "./TodoList";
import AddTodo from "./AddTodo";


const styles = () => ({
    content: {
        maxWidth: '1230px',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    }
});

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = { todos: [] };

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
        this.handleToggleTodo = this.handleToggleTodo.bind(this);
    }

    handleAddTodo(e) {
        e.preventDefault();
        let todo = {
            name: e.target.name.value,
            createdAt: new Date().toLocaleDateString("es-Es"),
            status: false
        };
        this.setState({ todos: this.state.todos.concat(todo) });
        this.child.handleClose()
    }

    handleRemoveTodo(index) {
        this.setState({ todos: this.state.todos.filter((todo, i) => i !== index ) });
    }

    handleToggleTodo(index) {
        this.setState({ todos: this.state.todos.map((todo, i) => {
            if (i === index) {
                todo.status = !todo.status;
            }
            return todo;
        })});
        console.log(this.state.todos);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.content}>
                <h1>Todo List</h1>
                <AddTodo addTodo={this.handleAddTodo} onRef={ref => (this.child = ref)} />
                <TodoList todos={this.state.todos} toggleTodo={this.handleToggleTodo} removeTodo={this.handleRemoveTodo}/>
            </div>
        );
    }
}

export default withStyles(styles)(Content);
