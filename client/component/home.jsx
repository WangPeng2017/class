'use strict';

//import $ from 'zepto';
import { Component } from 'react';

let username = 'helloworld';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
          <div>
            <div className="jumbotron">
              <div
                className="container"
                style={{'textAlign':'center'}}>
                    <h1>你的课程助手</h1>
                    <p>点击一键登录，马上免费使用！</p>
                    <p style={{'fontSize':'16px'}}>我们将为你创建唯一用户ID， 免去你注册的烦恼</p>
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
              </div>
            </div>
          </div>
        );
    }
}
