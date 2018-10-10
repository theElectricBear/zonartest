import React, { Component } from 'react';
import data from './data/bookdata.json';
import './App.css';

class App extends Component {
  constructor(props) {
		super(props);
		this.state= {
      books: [],
      wishlist: []
		};
		//binding all our functions to this class
		// this.deleteComment = this.deleteComment.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.currentTarget.id)
  }

  componentDidMount(){
    this.setState({ books: data})
  }
  render() {
    const books = this.state.books.map((book) => <li id={ book.id } key={book.guid} onClick={this.handleClick}>{ book.name }</li>)
    const whishlist = this.state.wishlist.map((book) => <li key={book.guid}>{ book.name }</li>)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Zonar Books</h1>
        </header>
        <div className="books list">
          <h2>Books</h2>
          <ul>
            { books }
          </ul>
        </div>

        <div className="wish listy">
          <h2>Whishlist</h2>
          <ul>
            { whishlist }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
