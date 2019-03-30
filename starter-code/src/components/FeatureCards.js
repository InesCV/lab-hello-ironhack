import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const { img, title, description } = this.props;
    return (
      <div>
        <img src={img}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )
  }
}

export default Navbar;