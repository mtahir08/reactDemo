import React from 'react';

import { data } from './../services/index'

const Home = (props) => {

  const showUserDetail = user => {
    // props.history.push(`/detail/` + user.id + '/' + user.name);
    props.history.push(`/detail/${user.id}/${user.name}`);
  };

  return (
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Class</td>
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
                <button onClick={() => showUserDetail(user)}>
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
export default Home;
