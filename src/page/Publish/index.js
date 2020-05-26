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
  getFirstImage(text){
    var pattern = /!\[.*\]\((.*)\)|!\[.*\]\[.*\]|\[.*\]: .*"".*""/;
    var result = text.match(pattern);
    return result[1].split(' ')[0]
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
        var article = this.exchangeImg(text)
        var imgUrl = this.getFirstImage(article)
        const articles_copy = this.state.articles.slice();
        articles_copy.push ({title: title, describe:sub, article:article, imgSrc: imgUrl})
        this.setState({articles: articles_copy})
      })
  }
  exchangeImg(text){
    var result = text
    Object.keys(this.imgList).map(key => {
      var extension = get_extension (this.imgList[key])
      result =  result.replace(key +'.'+extension, this.imgList[key])
    })
    return result
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
