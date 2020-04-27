import React from "react";


class Navbar extends React.Component {
    render() {  
      let nav = this.props.nav;
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className = "nav navbar-nav">           
            {Object.keys(nav).map(element => {
                return <li className = "nav-item"><a className = "nav-link" href="{nav[element]}">{element}</a></li>;
            })}           
            </ul>
        </nav>
      );
    }
}
  
export default Navbar;
  