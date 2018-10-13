import React, { Component } from 'react';

import { data } from './../services/index';

class Home extends Component {
  showUserDetail = id => {
    this.props.history.push(`/detail/${id}`);
    //   this.props.history.push(`/detail/` + id);
  };
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Class</td>
            <td />
            <td />
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.class}</td>
                <td>
                  <button onClick={() => this.showUserDetail(user.id)}>
                    show details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default Home;
