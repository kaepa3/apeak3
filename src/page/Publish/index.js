import React, { Component } from 'react'
import { withRouter } from 'react-router';
import Card from '../../component/Card/index.js';
import styles from "./styles.module.css"

function createTitle (text)  {
  var title = text.substr(0 , text.indexOf('\n'))
  return title.replace('# ','' )
}
function createSubText(text){
  var first_idx = text.indexOf('\n');
  var second_idx = text.indexOf('\n', first_idx + 1);
  return text.substr(first_idx, second_idx)
}
class Publish extends Component{
  constructor(props) {
		super(props);
    this.state = { articles: []};
    this.handleClick= this.handleClick.bind(this);
  }
  componentDidMount() {
    const readmePath = require("./hoge.md");
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        var title = createTitle(text)
        var sub = createSubText(text)
        const articles_copy = this.state.articles.slice();
        articles_copy.push ({title: title, text:sub})
        this.setState({
          articles : articles_copy 
        })
      })
  }
  handleClick(e) {
    console.log('The link was clicked.');
    console.log(e);
  }

  render(){
    return(
      <div>
        <div onClick={this.handleClick} className={styles.card_panel}>
          {this.state.articles.map((item) => (
            <Card onClick={this.handleClick} key={item.title} {...item} />
           ))}
        </div>
      </div>
    );
  }
}
export default withRouter(Publish)
