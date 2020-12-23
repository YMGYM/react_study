import React, { Component } from 'react';

class TodoListItem extends Component {

    render() {
        const {context, onClick, btnFlag, buttonUpdate} = this.props;
        const btnText = btnFlag ? "확인" : "수정";
        return (
            <div>
                <li key= {context.id} onClick={() => onClick(context.id, context.context)}>
                {btnFlag ? <input /> : context.context }
                <button onClick={() => buttonUpdate(context.id)}>{btnText}</button>
                </li>
                
            </div>
        );
    }
}

export default TodoListItem;