import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoList extends Component {
    render() {
        return (
            <div>
                <p>{this.props.TodoArray[0].contents}</p>
            </div>
        );
    }
}


TodoList.propTypes = {

};


export default TodoList;
