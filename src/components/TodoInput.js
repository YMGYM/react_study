import React, {useState} from 'react';

const TodoInput = ({value}) => {
    // hooks
    const [Counter, setCounter] = useState(0); // this.state.Counter값, this.setState({counter: }), // 카운터의 초기값은 0으로 둠
    
    const handleIncrease = () => {
        setCounter(Counter + 1);
    };


    const handleDecrease = () => {
        setCounter(Counter - 1);
    }

    return (
        <div>
            <h3>열심히 누르자!!! 카운터!</h3>
            <h1>{Counter}</h1>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>

        </div>
    );
}

export default TodoInput;

// Counter