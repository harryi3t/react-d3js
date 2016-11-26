import React, { Component } from 'react';
import NavbarApp from './NavbarApp';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavbarApp url='https://github.com/harryi3t/new-app'>
        <h1>New App</h1>
      </NavbarApp>
    );
  }
}
