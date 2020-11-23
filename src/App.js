// import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';
// 가상돔
// import Virtual from './components/Virtual';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';


// 객체형 호출(함수형 호출보다 편리)
class App extends Component{
  //이벤트 핸들러
  //state(초기값 설정 등)
  // state = {
  //   value : ''
  // }
  // 이건 안바뀜 (불변성)

  // handleChange = (e) => {
  //   this.setState({
  //     value: e.target.value
  //   })
  // }
  //es6문법 (함수 선언법)
  //리액트에선 function을 선언할 수 없다.
  //e = event의 약어
  //state 값을 변경하고 싶을 때는 setState로변경해야함 - 불변성 보장


  // handleDestroy = () => {
  //   this.setState({
  //     value: ''
  //   })
  // }
  // 인자를 안받아도 됨.

  id = 2;
  state = {
    information: [
      {id: 1, contents: 'React 공부하기'},
      {id: 2, contents: 'asdfasdf'}
    ]
  }


  handleCreate = (data) => {
    this.setState({
      information: this.state.information.concat(
        {id: this.id++, contents: data}
      )
    })
  }
  
  //JSX 템플릿
  render(){
    return(
      // view에 보여지는 내용
      // 메인 돔임
      <div>
        <h3>참돔이에요</h3>     
        {/* <Virtual handleChange={this.handleChange} handleDestroy={this.handleDestroy} value={this.state.value}></Virtual>
        <label>{this.state.value}</label> */}
        <TodoInput onCreate={this.handleCreate}></TodoInput>
        <TodoList TodoArray={this.state.information}></TodoList>

      </div>
    );
  }
}

export default App;


// rcc => 클래스형 : 조금 무거운 대신 쓸 수 있는 기능이 많다.(라이프사이클..) rfcp => 함수형 : 클래스형의 반대.

// props : properties - 부모 자식간의 데이터바인딩이 이루어진다.
// state : 현재 상태
// state 조작

// 클래스형일때.. 
// constructor(props){
//   super(props);
//   this.state = {초기값}
// }

// 이걸 줄여서...
// state = {

// }