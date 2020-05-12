import React, {Component} from 'react'

import {sayHello} from 'test-node-ran0';

class Greeter extends Component {
    render() {
        console.log(sayHello("一汽"));
        return (<div>ddddd</div>);
    }
}

export default Greeter
