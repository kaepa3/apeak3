import React, { Component } from 'react'
import Card from '../../component/Card/index.js';
import styles from "./styles.module.scss"

class Publish extends Component{
  constructor(props) {
		super(props);
    this.state = { articles: [], isShown: false};
    this.handleClick= this.handleClick.bind(this);
    this.handleClickEvent= this.handleClickEvent.bind(this);
    this.handleCloseButtonClick= this.handleCloseButtonClick.bind(this);
    this.modalRef = React.createRef()
  }
  createTitle = (text) => {
    var title = text.substr(0 , text.indexOf('\n'))
    return title.replace('# ','' )
  }
  createSubText = (text) => {
    var first_idx = text.indexOf('\n');
    var second_idx = text.indexOf('\n', first_idx + 1);
    return text.substr(first_idx, second_idx)
  }
  removeDocumentClickHandler = ()  => {
    document.removeEventListener('click', this.handleClickEvent)
  }
  componentDidMount() {
    const readmePath = require("./hoge.md");
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        var title = this.createTitle(text)
        var sub = this.createSubText(text)
        const articles_copy = this.state.articles.slice();
        articles_copy.push ({title: title, describe:sub, article:text})
        this.setState({articles: articles_copy})
      })
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickEvent)
  }
  handleClick(e) {
    var article = e.currentTarget.getAttribute("article")
    this.setState({article: article, isShown: true})
    document.addEventListener('click', this.handleClickEvent)
  }
  handleClickEvent(e){
    if (this.modalRef && this.modalRef.current && !this.modalRef.current.contains(e.target)) 
    {
     this.setState({isShown: false})
     this.removeDocumentClickHandler()
    }
  }
  handleCloseButtonClick ()  {
    this.setState({isShown: false})
    this.removeDocumentClickHandler()
  }

  render(){
    return(
      <div className={styles.mainPanel}>
        <div className={styles.card_panel}>
          {this.state.articles.map((item) => (
            <Card onClick={this.handleClick} key={item.title} {...item} />
           ))}
        </div>
          <div className={`${styles.popupMenu} ${this.state.isShown ? styles.shown: ''}`} ref={this.modalRef}>
            <div>{this.state.article}</div>
            <button onClick={this.handleCloseButtonClick}>
              Close Menu
            </button>
          </div>
      </div>
    );
  }
}
export default Publish
