import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoInput extends Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        const {TodoArray} = this.props;
        const {value} = this.state;

        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.props.onCreate({value})}>등록</button>
            </div>
        );
    }
}


TodoInput.propTypes = {

};


export default TodoInput;
