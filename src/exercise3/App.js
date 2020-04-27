import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Box2 from "./Box2.js";



class Box1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    return (
      <div className="box-1">    
      <Box2 />        
       
      </div>
    );
  }
}




export default Box1;

ReactDOM.render(<Box1 />, document.getElementById('root'));


