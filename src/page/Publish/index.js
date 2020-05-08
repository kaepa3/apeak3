import React, { Component } from 'react'
import { withRouter } from 'react-router';
import Card from '../../component/Card/index.js';
import styles from "./styles.module.scss"

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
        articles_copy.push ({title: title, describe:sub, article:text})
        this.setState({
          articles : articles_copy 
        })
      })
  }
  handleClick(e, i) {
    console.log(e.currentTarget)
    var article = e.currentTarget.getAttribute("article")
    this.setState({article: article})
  }

  render(){
    return(
      <div>
        <div className={styles.card_panel}>
          {this.state.articles.map((item) => (
            <Card onClick={this.handleClick} key={item.title} {...item} />
           ))}
        </div>
        <PopupMenu/>
      </div>
    );
  }
}
export default withRouter(Publish)

const { useState, useEffect, useRef } = React

const PopupMenu = () => {
  const [isShown, setIsShown] = useState(false)
  const popupRef = useRef()
  const documentClickHandler = useRef()
  
  useEffect(() => {
    documentClickHandler.current = e => {
      console.log('documentClickHandler')
      
      if (popupRef.current.contains(e.target)) return

      setIsShown(false)
      removeDocumentClickHandler()
    }
  }, [])
  
  const removeDocumentClickHandler = () => {
    console.log('removeDocumentClickHandler')
    
    document.removeEventListener('click', documentClickHandler.current)
  }
  
  const handleToggleButtonClick = () => {
    console.log('handleToggleButtonClick')
    
    if (isShown) return
    
    setIsShown(true)
    document.addEventListener('click', documentClickHandler.current)
  }
  
  const handleCloseButtonClick = () => {
    console.log('handleCloseButtonClick')
    
    setIsShown(false)
    removeDocumentClickHandler()
  }
  
  return (

    <div className={styles.popupMenuContainer}>
      <button onClick={handleToggleButtonClick}>
        Toggle Menu
      </button>
      <div
        className={`${styles.popupMenu} ${isShown ? styles.shown: ''}`}
        ref={popupRef}
      >
        <div>menu</div>
        <button onClick={handleCloseButtonClick}>
          Close Menu
        </button>
      </div>
    </div> 
  )
}
