import './App.css';

import React, {Component} from 'react';
import TodoList from './components/TodoList';


// 객체형 호출(함수형 호출보다 편리)
class App extends Component{


  state = {
    todoList: [
      {id : 1, context: "운동"},
      {id : 2, context: "공부"}
    ]
  };


  handleUpdate = (id, context) => {
    console.log(id, context);
  }

  render(){
    // const todoList = this.state;
    const handleUpdate = this;
    return(
      <div>
        <TodoList todoList={this.state.todoList} onUpdate={handleUpdate}/>
      </div>
    );
  }
}

export default App;

