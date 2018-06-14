import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
import DOMPurify from 'dompurify';
import './App.css';


class Quote extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
  $.ajax( {
  	url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
  	success: (data, err) => {
  		let post = data[0];
  		let author = post.title;
  		let content = post.content;
  		console.log(author);
  		this.setState({
  			quote: content,
  			author: author
  		});
  		},
  	cache: false
  });
};

  componentWillMount() {
    this.getQuote();
  }

  handleClick() {
    this.getQuote();
  }
  
  render() {
  	let quote = this.state.quote;
  	let author = this.state.author;
    return (
      <div className="text" id="quote-box">
      <div id="text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(quote)}}></div><div id="author" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(author)}}></div>
      <br/><button type="button" id="new-quote" className="btn btn-primary" onClick={this.handleClick}>Get a new quote</button> 
      <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet this quote</a></div>
      );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export { Quote };
