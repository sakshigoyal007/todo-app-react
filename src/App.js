import React from 'react';
import logo from './logo.svg';
// import styled from 'styled-components';
import InputBox from './components/InputBox';
import Header from './components/Header';
import TodoList from './components/TodoList';
import 'bulma/css/bulma.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  handleDelete = (index) => {
    const newData = [...this.state.data];
    newData.splice(index, 1);
    this.setState({ data: newData });
  }

  handleSubmit = (currData) => {
    this.setState({ data: [...this.state.data, currData] });
  }

  render() {
    return (
      <div>
        <header className="App-header1" />
        <div className="App">
          <div className="card frame">
            <Header />

            <InputBox onFormSubmit={this.handleSubmit} />
            <TodoList datas={this.state.data} onDelete={this.handleDelete} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
