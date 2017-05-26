'use strict';

// import $ from 'zepto';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';

class InputNewClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            insertData: false,
            name: '',
            progress: '',
        }
        this.submitData = {};

        this.submitClass = this.submitClass.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeProgress = this.changeProgress.bind(this);
    }

    changeName(event) {
        var value = event.target.value;
        this.setState({
            name: value
        });
    }

    changeProgress(event) {
        var value = event.target.value;
        this.setState({
            progress: value
        });
    }
    submitClass() {
        var name = $('#name').val();
        var progress = $('#progress').val();
        if(name === ''){

            return false;
        }

        var submitData = {
            name: this.state.name,
            progress: this.state.progress,
            date: new Date(),
            userName: '许静静'
        }
        $.ajax({
            type: 'POST',
            url: '/api/addclass',
            async: true,
            contentType: 'application/json;chartset=utf-8',
            data: JSON.stringify(submitData),
            dataType: 'json',
            success: function(data) {
                console.log(data);
                data && data.length !== 0 && this.setState({insertData: true});
                var t=setTimeout(function(){
                    this.setState({insertData: false, name: '', progress: '',});
                }.bind(this),1000);
            }.bind(this)
        });
    }
    render() {
        return(
            <div className="container" style={{'marginTop': '100px'}}>
                <form className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="name" className="col-sm-2 control-label">学生姓名：</label>
                    <div className="col-sm-10" style={{'color':'#a94442'}}>
                        <input type="name" className="form-control" id="name" placeholder="请输入学生姓名" onChange={this.changeName}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="progress" className="col-sm-2 control-label">课程进度：</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="progress" placeholder="请输入课程进度" onChange={this.changeProgress}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-2">
                        <button type="button" className="btn btn-success btn-lg btn-block" disabled={this.state.name === '' && 'true'} onClick={this.submitClass} >Submit</button>
                    </div>
                  </div>
                </form>

                {
                    this.state.insertData &&
                    <div className="alert alert-success" role="alert" style={{'marginTop':'40px', 'textAlign':'center'}}>插入成功！</div>
                }
            </div>
        );
    }   
}

ReactDOM.render(
    (<div>
        <Header />
        <InputNewClass />
    </div>),
    document.getElementById('root')
);
