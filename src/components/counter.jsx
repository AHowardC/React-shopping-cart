import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        // imageUrl: 'https://picsum.photos/201'
    };

    styles = {
        fontSize: '50px',
        fontWeight: "bold"
    };

    render() {
        return (
            <React.Fragment>
                <img src={this.state.imageUrl} alt=""/>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
