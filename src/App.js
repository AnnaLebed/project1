import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Navbar from "./Navbar";
import Header from "./Header";
import Main from "./Main";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: ''
    };
  }

  render() {
    let nav = {"SERVICES":'/SERVICES', "MAIN": '/MAIN', "THE TEAM":'THE TEAM'}
    return (
      <div className="main-container">    
      <Navbar nav={nav} />
      <Header header = "SERVICES"/>
      <Main />
      </div>
    );
  }
}


export default App;

ReactDOM.render(<App />, document.getElementById('root'));


