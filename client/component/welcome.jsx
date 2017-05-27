'use strict';

import { Component } from 'react';

export default class Title extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron">
              <div className="container">
                <h1 style={{'textAlign':'center'}}>Hello, { this.props.userName }!</h1>
                <p></p>
              </div>
            </div>
        )
    }
}