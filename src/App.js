import './App.css';

import React, {Component} from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

// import TodoInput from './components/TodoInput';

// 객체형 호출(함수형 호출보다 편리)
class App extends Component{

  id = 2;

  state = {
    value: '',
    todoList: [
      {id : 0, context: "운동"},
      {id : 1, context: "공부"}
    ],
    btnFlag: false
  };



  handleUpdate = (id, context) => {
    const {todoList} = this.state;
    this.setState({
      // todoList: [
      //   ...todoList.splice(0, id),
      //   {id, context},
      //   ...todoList.splice(id + 1, todoList.length - 1)
      // ]
      todoList: todoList.map((data) => {
        if(data.id === id){
          data.context = context;
        }
        return data;
      })
    });

  }


  handleChange = (e) => {
    this.setState({
        value: e.target.value
    });
  };


  handleCreate = () => {
    this.setState({
      todoList: [...this.state.todoList,
        {id: this.id, context: this.state.value}
      ],
      value: ''
    });
    this.id++;
  };

  handleDestroy = (id) => {
    const {todoList} = this.state;

    this.setState({
      // todoList: [
      //   ...this.state.todoList.slice(0, id),
      //   ...this.state.todoList.slice(id+1)
      // ]
      todoList: todoList.filter((data) => data.id !== id)
    });
  }


  render(){
    const {todoList} = this.state;
    const {handleUpdate, handleDestroy} = this;
    return(
      <div>
        <h2>새로운 할 일 추가</h2>
        <input type="text" placeholder="내용추가" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleCreate}>추가</button>
        <h2>오늘은 꼭 하자 ㅜㅜ</h2>
        {console.log(todoList)}
        <TodoList todoList={todoList} onUpdate={handleUpdate} onDestroy={handleDestroy}/>
        <TodoInput value={this.state.value}/>
      </div>
    );
  }
}

export default App;

