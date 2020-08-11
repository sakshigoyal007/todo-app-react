import React from 'react';
import logo from './logo.svg';
// import styled from 'styled-components';
import './App.css';
import InputBox from './components/InputBox';
// import AppBar from 'material-ui/AppBar';

// const AppTitle = styled.h1`
//   display: block;
//   height: 64px;
//   margin: 0;
//   padding: 20px 0;
//   font-size: 20px;
//   text-transform: uppercase;
//   font-weight: 400;
//   color: #ffffff;
//   transition: 0.3s 1.4s;
//   opacity:1;
//   `;


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <header className="App-header1">
          <span style={{ color: 'white' }}>To-Do List</span>

        </header>

        {/* <AppTitle>To-DO LIST</AppTitle> */}

        <InputBox />



      </div>
    );
  }
}


export default App;
