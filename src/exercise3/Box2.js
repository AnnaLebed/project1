import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Box3 from "./Box3.js";


class Box2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }
  render() {
    return (
      <div className="box-2">    
      <Box3 /> 
      </div>
    );
  }
}

export default Box2;

ReactDOM.render(<Box2 />, document.getElementById('root'));
