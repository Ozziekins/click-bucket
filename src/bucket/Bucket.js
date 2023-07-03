import React from "react";
import './Bucket.css';
import '../status/Status.js'
import Status from "../status/Status";

class Bucket extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            currentCapacity: 0,
            animate: false
        };
    }

    handleClick() {
        let newCapacity = this.state.currentCapacity + this.props.increment;
        if (newCapacity >= this.props.totalCapacity) {
            this.setState({ currentCapacity: newCapacity, animate: true });
            setTimeout(() => {
                this.maxCapacity();
            }, 500);
        } else {
            this.setState({ currentCapacity: newCapacity, animate: true });
            setTimeout(() => {
                this.setState({ animate: false });
            }, 1000);
        }
    }

    maxCapacity() {
        this.props.delete(this.props.id);
    }

    render() {
        const statusElement = this.state.animate ? <Status increment={this.props.increment} /> : "";
        return (
            <div>
                {statusElement}
                <div className="cup" onClick={this.handleClick} style={{ backgroundPosition: ` 0px ${200 - (200*this.state.currentCapacity / this.props.totalCapacity)}px` }}/>
                <h3 className="capacity-count">{this.state.currentCapacity} / {this.props.totalCapacity}</h3>
            </div>
        );
    }
}

export default Bucket;