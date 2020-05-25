import React, { Component } from 'react'
import Card from '../../component/Card/index.js';
import Button from '../../component/Button/index.js';
import styles from "./styles.module.scss"
import marked from 'marked';
import test from './test.jpg';
import hoge from './test.jpg';

function get_extension(filename) {
    return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
}

class Publish extends Component{
  constructor(props) {
		super(props);
    this.state = { articles: [], isShown: false};
    this.handleClick= this.handleClick.bind(this);
    this.handleClickEvent= this.handleClickEvent.bind(this);
    this.handleCloseButtonClick= this.handleCloseButtonClick.bind(this);
    this.modalRef = React.createRef()
    this.imgList = { test, hoge};
    console.log(this.imgList)
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
        var article = this.exchangeImg(text)
        articles_copy.push ({title: title, describe:sub, article:article})
        this.setState({articles: articles_copy})
      })
  }
  exchangeImg(text){
    Object.keys(this.imgList).map(key => {
      console.log(key )
      console.log( get_extension (this.imgList[key]))
      var extension = get_extension (this.imgList[key])
      text =  text.replace(key +'.'+extension, this.imgList[key])
    })
    console.log(text)
    return text
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickEvent)
  }
  handleClick(e) {
    var article = marked(e.currentTarget.getAttribute("article"))
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
    const article = this.state.article;
    return(
      <div className={styles.mainPanel}>
        <div className={styles.card_panel}>
          {this.state.articles.map((item) => (
            <Card onClick={this.handleClick} key={item.title} {...item} />
           ))}
        </div>
        <div className={`${styles.popupMenu} ${this.state.isShown ? styles.shown: ''}`} ref={this.modalRef}>
          <div dangerouslySetInnerHTML={{
          __html: article 
        }}></div>
          <div className={styles.closePanel}>
            <Button className={styles.closeButton} content="close" onClick={this.handleCloseButtonClick}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Publish
