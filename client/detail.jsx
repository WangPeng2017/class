'use strict';

//import $ from 'zepto';
import React from 'react';
import ReactDOM from 'react-dom';
import { format } from './lib/utils.jsx';

import Header from './component/header';
import Welcome from './component/welcome';
const userName = userInfo.name;

class TableDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            studentsList : []
        }
    }
    componentDidMount() {
        this.fetchDetail(this.props.userName);
    }
    fetchDetail(userName){
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
        return (
            <div className="container">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                          <td>#</td>
                          <td>学生姓名</td>
                          <td>上课日期</td>
                          <td>课程进度</td>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            this.state.studentsList && this.state.studentsList.map((item, key) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{item.name}</td>
                                    <td>{format(item.date)}</td>
                                    <td>{item.progress}</td>
                                </tr>
                            ))
                       }
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Header />
        <Welcome userName={userName}/>
        <TableDetail userName={userName}/>
    </div>
    ,document.getElementById('root')
);
