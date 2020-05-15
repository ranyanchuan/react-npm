import React, {Component} from 'react'
import "./Button.less";


class Greeter extends Component {
    constructor(props) {
        super(props);
    }


    onClick = () => {
        const {onClick} = this.props;
        console.log("=======");
        if (onClick) {
            onClick();
        }
    }

    render() {
        return (<div>
            <button className={"reactBtnPrimary"} onClick={this.onClick}>按钮</button>
        </div>);
    }
}

export default Greeter
