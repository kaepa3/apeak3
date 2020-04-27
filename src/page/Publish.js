import React, { Component } from 'react'
import { withRouter } from 'react-router';
import marked from 'marked';
import Card from '../component/Card/index.js';

class Publish extends Component{
  constructor(props) {
		super(props);
		this.markdown = `# in preparation`
		this.articles =[this.markdown, this.markdown]
  }
  render(){
    return(
      <div>
        <div id="article" dangerouslySetInnerHTML={{__html:marked(this.markdown)}}></div>
        {Object.keys(this.articles).map(key => (
            <Card />
        ))}
      </div>
    );
  }
}
export default withRouter(Publish)
