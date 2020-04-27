import React from 'react';
import './App.css';


function Card({ picture, header, description }) {
    return (
      <div className="card main-background-color">
        <div className="main-background-color">
            < img className = "card-picture" src = {picture} alt=""/>
        </div>
        <div className="card-header text-white text-center">
            <strong>{header}</strong>         
        </div>
        <div className="text-center text-white">
          <span>{description}</span>         
        </div>
      </div>
    );
  }


class Main extends React.Component {
    render(){
        return (
            <div className = "container mx-auto mt-4 cards-container ">
                <Card picture = "./azores.jpg" 
                header = "USER INTERFACE DESIGN" 
                description = "Wireframing, prototyping, Usability testing" />
                <Card picture = "./azores.jpg" 
                header = "CONCEPT AND IDEAS" 
                description = "Wireframing prototyping Usability testing"/>
                <Card picture = "./azores.jpg" 
                header = "DESIGN AND BRANDING" 
                description = "Wireframing, prototyping, Usability testing" />
            </div>
        )
    }
}





export default Main;