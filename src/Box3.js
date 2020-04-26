import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Box4 from "./Box4.js";


class Box3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }
  render() {
    return (
      <div className="box-3"> 
      <Box4 />
      <Box4 /> 
      </div>
    );
  }
}

export default Box3;

ReactDOM.render(<Box3 />, document.getElementById('root'));