import React, { Component } from 'react'
import { withRouter } from 'react-router';
import marked from 'marked';
import Card from '../../component/Card/index.js';
import styles from "./styles.module.css"

class Publish extends Component{
  constructor(props) {
		super(props);
		this.markdown = `# in preparation`
		this.articles =[{title:"first", text:this.markdown}, {title:"second", text: this.markdown}]
  }
  render(){
    var cards = this.articles.map((value,i) => <Card key={i} {...value}></Card>)
    return(
      <div>
        <div id="article" dangerouslySetInnerHTML={{__html:marked(this.markdown)}}></div>
        <div className={styles.card_panel}>
          {cards}
        </div>
      </div>
    );
  }
}
export default withRouter(Publish)
