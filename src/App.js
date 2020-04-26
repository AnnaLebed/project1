import React from 'react';
import './App.css';



function LocationItem(props){
  const  {name, locationURL, picture} = props;
  return(
    <li className = "location-item">   
    <a href={locationURL}>{name}</a>
    <img className="item-image" src = {picture} alt ={name} />    
    </li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header"><h1>Travel locations</h1>
        <ul className = "locations-list">
          <LocationItem name = {"Singapore"} locationURL = {"https://www.google.com.sg/maps/place/Singapore/@1.3143394,103.704162,11z/data=!3m1!4b1!4m5!3m4!1s0x31da11238a8b9375:0x887869cf52abf5c4!8m2!3d1.352083!4d103.819836"} 
          picture = {"https://image.cnbcfm.com/api/v1/image/105066394-GettyImages-498350103_1.jpg?v=1532563669&w=1400&h=950"}/>
          <LocationItem name = {"Japan"} locationURL = {"https://www.google.com.sg/maps/place/Japan/@31.7160405,120.2780609,4z/data=!3m1!4b1!4m5!3m4!1s0x34674e0fd77f192f:0xf54275d47c665244!8m2!3d36.204824!4d138.252924"} 
          picture = {"https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ports-and-destinations/destinations/japan/assets/japan-fuji-mountain-himeji-castle-full-cherry-blossom-h.jpg?$750x667$"}/>
          <LocationItem name = {"Azores"} locationURL = {"https://www.google.com.sg/maps/place/Azores,+Portugal/@38.3098458,-30.3847175,7z/data=!3m1!4b1!4m5!3m4!1s0xb467f1e11e43b05:0xe2911b674bce0c1d!8m2!3d37.7412488!4d-25.6755944"} 
          picture = {'https://uploads-ssl.webflow.com/5797cdbc61f4a60269ad9020/5a5a63a9a0eb5000019be6fa_img-azores-3%402x-p-1080.jpeg'}/>

        </ul>       
      </header>
    </div>
  );
}

export default App;
