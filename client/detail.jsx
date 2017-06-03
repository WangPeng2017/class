'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { format } from './lib/utils.jsx';

import Header from './component/header';
import Welcome from './component/welcome';
import InputNewClass from './component/inputNewClass';
const userName = userInfo.name;

class TableDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            studentsList : [],
            renderAgain: false
        }

        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.fetchRead = this.fetchRead.bind(this);
        this.fetchRemove = this.fetchRemove.bind(this);
    }

    componentDidMount() {
        this.fetchRead(this.props.userName);
    }
    update(e){
      console.log('change');
      var tar = e.target
      var studentName = $(tar).parents('tr').find('.name').html();
      var progress = $(tar).parents('tr').find('.progress').html();
      var date = $(tar).parents('tr').find('.date').html();
      var id = $(tar).parents('tr').attr('data-id')
      this.setState({
        studentName: studentName,
        progress: progress,
        date: date,
        id: id
      });

    }
    delete(e){
      var tar = e.target
      var id = $(tar).parents('tr').attr('data-id');
      this.fetchRemove(id)
    }
    fetchRemove(id){
        $.ajax({
          type: 'POST',
          url: '/api/removedetail',
          async: true,
          contentType: "application/json;charset=utf-8",
          data: JSON.stringify({'_id': id}),
          dataType: 'json',
          success: function (data) {
            if(data && data.length !== 0) {
              // 从后台重新获取数据
              this.fetchRead(this.props.userName);
            }
          }.bind(this)
        });
    }

    fetchRead(userName){
        $.ajax({
          type: 'POST',
          url: '/api/getdetail',
          async: true,
          contentType: "application/json;charset=utf-8",
          data: JSON.stringify({'userName': userName}),
          dataType: 'json',
          success: function (data) {
            if(data && data.length !== 0) {
                this.setState({
                    studentsList:data
                });
            } else {

            }
          }.bind(this)
        });
    }
    render() {
        const userName = userInfo.name;
        return (
            <div className="container">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                          <td>#</td>
                          <td>学生姓名</td>
                          <td>上课日期</td>
                          <td>课程进度</td>
                          <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            this.state.studentsList && this.state.studentsList.map((item, key) => (
                                <tr key={key} data-id={item._id}>
                                    <td>{key}</td>
                                    <td className="name">{item.name}</td>
                                    <td className="date">{format(item.date).slice(5)}</td>
                                    <td className="progress">{item.progress}</td>
                                    <td>
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-xs"
                                        style={{margin:'5px'}}
                                        data-toggle="modal"
                                        data-target="#myModal"
                                        onClick={this.update}
                                      >
                                        编辑
                                      </button>
                                      <button
                                        type="button"
                                        style={{margin:'5px'}}
                                        className="btn btn-primary btn-xs"
                                        onClick={this.delete}
                                      >
                                        删除
                                      </button>
                                    </td>
                                </tr>
                            ))
                       }
                    </tbody>
                </table>

                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="myModalLabel">
                          修改课程
                        </h4>
                      </div>
                      <div className="modal-body" style={{'padding': '60px 0px 30px'}}>
                        <InputNewClass
                          userName={userName}
                          studentName={this.state.studentName}
                          progress={this.state.progress}
                          date={this.state.date}
                          id={this.state.id}
                          fetchRead ={this.fetchRead}
                        />
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Header />
        <Welcome userName={userName} />
        <TableDetail userName={userName}/>
    </div>
    ,document.getElementById('root')
);
