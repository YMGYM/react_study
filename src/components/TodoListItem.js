import React, { Component } from 'react';

class TodoListItem extends Component {
    render() {
        const {context} = this.props;

        
        return (
            <div>
                {context}
            </div>
        );
    }
}

export default TodoListItem;