import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';
// 가상돔
import Virtual from './components/Virtual';


// 객체형 호출(함수형 호출보다 편리)
class App extends Component{
  //이벤트 핸들러
  //state(초기값 설정 등)

  //JSX 템플릿
  render(){
    return(
      // view에 보여지는 내용
      // 메인 돔임
      <div>
        <h3>참돔이에요</h3>     
        <Virtual></Virtual>
      </div>
    );
  }
}

export default App;
