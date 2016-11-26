import React, { Component } from 'react';
import Navbar from './Navbar';

export default class App extends Component {
  getTitle() {
    return this.props.title ||
      this.props.url.match(/https?:\/\/github.com\/[-_a-zA-Z0-9]+\/([-_a-zA-Z0-9]+)/)[1];
  }
  render() {
    return (
      <div>
        <Navbar url={this.props.url} title={this.getTitle()}/>
        <div style={{marginTop: '130px'}} className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
