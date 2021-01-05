import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    render() {
        const {todoList, onUpdate, onDestroy} = this.props;
        // console.log(todoList); // array

        // for문... 은 불변성을 지키기 위해 사용안함
        // 기존의 배열을 건드리지 않으면서(카피하면서) 반환하는 메소드를 사용해야함. => map사용

        
        return (
            <div>
                <ul>
                    {todoList.map((data) => {
                        // return <li onClick = {() => onUpdate(data.id, data.context)} key={data.id}>{data.context}<button>수정</button></li> // 배열에 key값을 가지기를 권장함
                        // return <li key={data.id} ><TodoListItem context={data.context} /></li>
                        return <TodoListItem onUpdate={onUpdate} onDestroy={onDestroy} context={data}/>
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoList;
