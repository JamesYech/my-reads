import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="list-books-title">
          <h1>MyReads</h1>
        </header>
        <div  className="bookshelf-title">
          <h2>Currently Reading</h2>
        </div>

        <div className="bookshelf-title">
          <h2 >Want to Read</h2>
        </div>

        <div className="bookshelf-title">
          <h2 >Have Already Read</h2>
        </div>
      </div>
    );
  }
}

export default App;
