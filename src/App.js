import './App.css';

import React, {Component} from 'react';
import TodoList from './components/TodoList';
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
    console.log(id, context);
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


buttonUpdate = (id) => {
  console.log('아이디',id);
  if (id === )
    this.setState({
        btnFlag: this.state.btnFlag ? false : true
    });
}


  render(){
    const {todoList, btnFlag} = this.state;
    const {handleUpdate, buttonUpdate} = this;
    return(
      <div>
        <h2>새로운 할 일 추가</h2>
        <input type="text" placeholder="내용추가" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleCreate}>추가</button>
        <h2>오늘은 꼭 하자 ㅜㅜ</h2>

        <TodoList todoList={todoList} onUpdate={handleUpdate} btnFlag={btnFlag} buttonUpdate={buttonUpdate}/>

        {/* <TodoInput /> */}
      </div>
    );
  }
}

export default App;

