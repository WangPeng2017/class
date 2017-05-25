'use strict';

//import $ from 'zepto';
import React from 'react';
import ReactDOM from 'react-dom';

class TableDetail extends React.Component{
    componentDidMount() {
        this.fetchDetail('helloworld');
    }
    fetchDetail(userName){
        $.ajax({
          type: 'POST',
          url: '/getdetail',
          async: true,
          contentType: "application/json;charset=utf-8",
          data: JSON.stringify({'userName': userName}),
          dataType: 'json',
          success: function (data) {
            if(data && data.length !== 0) {
              alert(data)
            } else {
              
            }
          }.bind(this)
        });
      }
    render() {
        return (
            <div>
                <h1>Hello TableDetail</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                          <td>学生姓名</td>
                          <td>课程进度</td>
                          <td>上课日期</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>1111</td>
                          <td>1111</td>
                          <td>1111</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>1111</td>
                          <td>1111</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>1111</td>
                          <td>1111</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <TableDetail />,
    document.getElementById('root')
);
