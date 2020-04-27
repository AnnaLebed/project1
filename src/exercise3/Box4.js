import React from 'react';
import ReactDOM from "react-dom";
import './App.css';


class Box4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }
  render() {
    return (
      <div className="box-4"> 

      </div>
    );
  }
}

export default Box4;

ReactDOM.render(<Box4 />, document.getElementById('root'));