import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        return (
            <div>
                <h2>새로운 할 일 추가</h2>
                <input type="text" placeholder="내용추가" />
                <button>추가</button>
            </div>
        );
    }
}

export default TodoInput;
