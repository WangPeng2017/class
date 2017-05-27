'use strict';

//import $ from 'zepto';
import { Component } from 'react';
import Welcome from './welcome';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron">
              <div
                className="container"
                style={{'textAlign':'center'}}>
                    <h1>你的课程助手</h1>
                    <p>点击登录，马上免费使用！</p>
                    {
                      !this.props.userName &&
                      <p>
                        <a
                          className="btn btn-primary"
                          href="/regist"
                          role="button"
                          style={{'marginRight':'10px'}}
                        >
                          注册
                        </a>
                        <a
                          className="btn btn-primary"
                          href="/login"
                          role="button"
                        >
                          登录
                        </a>
                    </p>
                    }
                    {
                      this.props.userName &&
                      <Welcome {...this.props}/>
                    }
              </div>
            </div>
        );
    }
}
