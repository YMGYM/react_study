import React, { Component } from 'react';

class TodoListItem extends Component {

    state = {
        btnFlag: false,
        context: ''
    };

    ButtonUpdate = (context) => {
        this.setState({
            btnFlag: !this.state.btnFlag,
            context: context
        })
    };
    
    HandleUpdate = (id) => {
        const {onUpdate} = this.props;
        const {context} = this.state;
        console.log(this.state.btnFlag);
        onUpdate(id, context);
        this.setState({
            context: '',
            btnFlag: !this.state.btnFlag
        });
        console.log(this.state.btnFlag);

    };

    HandleChange = (e) => {
        this.setState({
            context: e.target.value
        });
    };

    HandleDestroy = (id) => {
        this.props.onDestroy(id);
    }
    
    render() {
        const {btnFlag} = this.state;        
        const {data, onDestroy} = this.props;
        const {ButtonUpdate, HandleUpdate, HandleChange} = this;
        const btnText = btnFlag ? "확인" : "수정";
        return (
            <div>
                <li key= {data.id}>
                    {console.log(data)}
                {btnFlag ? <input onChange={HandleChange} value={this.state.context}/> : data.context }
                {btnFlag ? <button onClick={() => HandleUpdate(data.id)}>확인</button>
                : <button onClick={() => ButtonUpdate(data.context)}>수정</button>}
                <button onClick={() => this.HandleDestroy(data.id)}>삭제</button>
                </li>
                
            </div>
        );
    }
}

export default TodoListItem;

