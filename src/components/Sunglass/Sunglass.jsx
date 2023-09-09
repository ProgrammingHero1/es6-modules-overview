import React, { useEffect } from 'react';

import './Sunglass.css';
import Watch from '../Watch/Watch';
import { add, multiply, divideTheFirstNumberByTheSecondNumber as divide } from '../../Utils/calculate';
// import add from '../../Utils/calculate';

const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = add(first, second);
    const mult = multiply(first, second);
    const vaag = divide(first, second);

    useEffect()
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;