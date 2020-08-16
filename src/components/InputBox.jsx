import React, { Component } from 'react';

class InputBox extends Component {
    state = {
        phrase: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.phrase === '') return;
        this.props.onFormSubmit(this.state.phrase);
        this.setState({ phrase: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Add an item"
                    className="input"
                    value={this.state.phrase}
                    onChange={(e) => { this.setState({ phrase: e.target.value }) }}
                >
                </input>
                <button className="button custom-btn">ADD</button>
            </form>

        );
    }
}

export default InputBox;