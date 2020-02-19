import React, {Component} from 'react';

export default class Header extends Component {
  render(){
    return (
      <div style={styles.header} >
        <p>header</p>
      </div>
    );
  }
}

const styles = {
  header:{
    verticalAlign: 'middle',
    width: "100%",
    height:50,
    background: "#00cde1",
    position: "fixed",
  }
}
