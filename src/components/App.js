import React, { Component } from 'react';
import Navbar from 'my-navbar';
import Pipelines from './Pipelines';

export default class App extends Component {
  render() {
    return (
      <Navbar url='https://github.com/haryyi3t/react-d3JS'>
        <Pipelines />
      </Navbar>
    );
  }
}
