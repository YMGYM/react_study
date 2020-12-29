import React, { Component } from 'react';

class TodoListItem extends Component {

    state = {
        btnFlag: false,
        context: ''
    };

    ButtonUpdate = () => {
        this.setState({
            btnFlag: !this.state.btnFlag
        })
    };


    // HandleUpdate = (id) => {
    //     this.setState({
    //         btnFlag: !this.state.btnFlag
    //     })   
    // };

    // HandleChange = (e) => {
    //     this.setState({
    //         context: e.target.value
    //     });
    //     console.log(e.target.value);


    // }

    render() {
        const {btnFlag} = this.state;        
        const {context} = this.props;

        const {ButtonUpdate, HandleUpdate, HandleChange} = this;
        const btnText = btnFlag ? "확인" : "수정";
        return (
            <div>
                <li key= {context.id}>
                {btnFlag ? <input onChange={HandleChange} value={this.context.context}/> : context.context }
                {btnFlag ? <button onClick={() => HandleUpdate(context.id)}>"확인"</button>
                : <button onClick={() => ButtonUpdate()}>수정</button>}
                </li>
                
            </div>
        );
    }
}

export default TodoListItem;