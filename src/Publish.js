import React from 'react'
import { withRouter } from 'react-router';
import marked from 'marked';

const Publish = () =>{
  const markdown = `
# in preparation
`
  return(
    <div id="article" dangerouslySetInnerHTML={{__html:marked(markdown)}}></div>
    );
};
export default withRouter(Publish)
