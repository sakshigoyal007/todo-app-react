import React, { Component } from 'react';

class InputBox extends Component {
    state = {}
    render() {
        return (
            // <h1>Hey</h1>
            <div className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                    </div>
                    <input type="text" placeholder="add a todo item">
                    </input>
                    <button type="submit">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default InputBox;