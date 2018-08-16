import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
        imageUrl: 'https://picsum.photos/201',
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    styles = {
        fontSize: '50px',
        fontWeight: "bold"
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    // when you need to bind this keyword in a class use es6 arrow function so you dont need to set up a constructor to bind this keyword for eventhandlers

    handleIncrement = () => {
        console.log('Increment Clicked', this);
    }

    render() {
        return (
            <React.Fragment>
                <img src={this.state.imageUrl} alt=""/>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={this.handleIncrement} 
                className="btn btn-secondary btn-sm">Increment</button>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                <div>
                {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.renderTags()}</div>
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
