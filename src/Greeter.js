import React, {Component} from 'react'
import "./Greeter.less";


class Greeter extends Component {
    constructor(props) {
        super(props);
    }


    onClick = () => {
        const {onClick} = this.props;
        if (onClick) {
            onClick();
        }
    }

    render() {
        return (<div>
            <div className={"reactBtnPrimary"} onClick={this.onClick}>按钮</div>
        </div>);
    }
}

export default Greeter
