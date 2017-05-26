'use strict';

//import $ from 'zepto';
import React from 'react';
import { Component } from 'react';

class Regist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            insertData: false,
            name: '',
            progress: '',
        }
        this.submitData = {};

        this.submitUser = this.submitUser.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changePassWord = this.changePassWord.bind(this);
    }

    changeName(event) {
        var value = event.target.value;
        this.setState({
            name: value
        });
    }

    changePassWord(event) {
        var value = event.target.value;
        this.setState({
            password: value
        });
    }

    submitUser() {
        var name = $('#name').val();
        var progress = $('#progress').val();
        if(name === ''){

            return false;
        }

        var submitData = {
            name: this.state.name,
            password: this.state.password,
            email: '暂无'
        }
        $.ajax({
            type: 'POST',
            url: '/api/adduser',
            async: true,
            contentType: 'application/json;chartset=utf-8',
            data: JSON.stringify(submitData),
            dataType: 'json',
            success: function(data) {
                console.log(data);
                if(data && data.length !== 0 ){
                     window.location.href = '/';
                }
            }.bind(this)
        });
    }

    render() {
        return (
             <div className="container" style={{'marginTop': '100px'}}>
                <form className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="name" className="col-sm-2 control-label">用户名：</label>
                    <div className="col-sm-10" style={{'color':'#a94442'}}>
                        <input type="text" className="form-control" id="name" placeholder="请输入用户名" onChange={this.changeName}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="col-sm-2 control-label">密码：</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" placeholder="请输入密码" onChange={this.changePassWord}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-2">
                        <button
                            type="button"
                            className="btn btn-success btn-lg btn-block"
                            disabled={this.state.name === '' || this.state.password === '' && 'true'}
                            onClick={this.submitUser}
                        >
                            Submit
                        </button>
                    </div>
                  </div>
                </form>
            </div>
        );
    }
}


ReactDOM.render(
    <Regist />,
    document.getElementById('root')
);