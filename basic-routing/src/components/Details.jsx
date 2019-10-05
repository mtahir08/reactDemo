import React, { useState, useEffect } from 'react';

const data = [
  {
    id: 1,
    name: 'Arsalan',
    class: 'A'
  },
  {
    id: 2,
    name: 'Tahir',
    class: 'A'
  },
  {
    id: 3,
    name: 'Waseem',
    class: 'A'
  }
];

const Details = (props) => {
  const [user, setUser] = useState(null)
  const setUserDetails = () => {
    const { id } = props.match.params
    console.log(id);
    if (id) {
      const newUser = data.find((item) => `${item.id}` === id)
      setUser(newUser);
    }

  }

  useEffect(() => {
    setUserDetails();
  }, [])
  console.log(user)
  return (
    <div>
      <h1>User Detail</h1>
      <ul>
        <li>ID: {user ? user.id : null}</li>
        <li>NAME: {user ? user.name : null}</li>
        <li>CLASS: {user ? user.class : null}</li>
      </ul>
    </div>
  );
}

// const Details = (props) => {

//   sendUserData = () => {

//     //   SaveUserData(props.user)
//     //     .then(success => {
//     //       console.log(success);
//     //       // Here we can set user data to service and
//     //       // route user to main dashobard
//     //       this.props.history.push('/');
//     //     })
//     //     .catch(error => {
//     //       // Here we can show error message to user
//     //       console.log(error);
//     //     });
//     // };


//     return (
//       <div>
//         <h1>User Detail</h1>
//         {props.user ? (
//           <ul>
//             <li>ID: {props.user.id}</li>
//             {/* <li>{props.user && props.user ? props.user.id: null}</li> */}
//             <li>NAME: {props.user.name}</li>
//             <li>CLASS: {props.user.class}</li>
//             <li>
//               <button onClick={this.sendUserData}>Send to server</button>
//             </li>
//           </ul>
//         ) : null}
//       </div>
//     );
//   }

export default Details;
