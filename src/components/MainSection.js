import React, {Component} from 'react';
import TodoItem from './TodoItem';

class MainSection extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {filter: 'show_all'};
    }

    render() {
        const {todos, actions} = this.props;

        return (
            <section className="main">
                <ul className="todo-list">
                    {todos.map(todo =>
                        <TodoItem key={todo.id} todo={todo} {...actions} />
                    )}
                </ul>
            </section>
        )
    }
}

export default MainSection;
