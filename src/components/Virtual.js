// import React, {Component} from 'react';
// import './Virtual.css';

// class Virtual extends Component{
//     render(){
//         return(
//             <div>
//                 <h4>가상 돔이에요 ㅎㅎ</h4>
//                 <input type="text" onChange={this.props.handleChange} value={this.props.value}></input>
//                 <button onClick={this.props.handleDestroy}>삭제</button>
//             </div>
            
//         );
//     }
// }

// export default Virtual;
// ---------- 함수형
import React from 'react';


const Virtual = ({value, handleChange, handleDestroy}) => {
    // 함수형에서는 hook을 사용해야 state 를 쓸 수 있음
    return (
        <div>
            <h4>가상 돔이에요 ㅎㅎ</h4>
            <input type="text" onChange={handleChange} value={value}></input>
            <button onClick={handleDestroy}>삭제</button>
            <label>{this.state.value}</label>
        </div>
    );
};


// 메인돔은 클래스형, 가상돔은 함수형을 추천
export default Virtual;
