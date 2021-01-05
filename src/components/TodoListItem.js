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
        const {context, onDestroy} = this.props;
        const {ButtonUpdate, HandleUpdate, HandleChange} = this;
        const btnText = btnFlag ? "확인" : "수정";
        return (
            <div>
                <li key= {context.id}>
                {btnFlag ? <input onChange={HandleChange} value={this.context.context}/> : context.context }
                {btnFlag ? <button onClick={() => HandleUpdate(context.id)}>확인</button>
                : <button onClick={() => ButtonUpdate()}>수정</button>}
                <button onClick={() => this.HandleDestroy(context.id)}>삭제</button>
                </li>
                
            </div>
        );
    }
}

export default TodoListItem;