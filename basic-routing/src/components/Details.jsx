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
    const { id } = props.match.params// ES6
    // const id = props.match.params.id //Normal

    if (id) {
      // const newUser = data.find((item) => {
      //   console.log(item.id, id, item.id == id)
      //   return item.id == id; //true 
      // })
      // const newUser = data.find((item) => item.id.toString() === id)
      const newUser = data.find((item) => `${item.id}` === id)
      setUser(newUser);
    }

  }


  // constructor
  // componentWillMount  // not use now
  // render
  // componentDidMount
  // componentWillUnmount


  useEffect(() => {
    // this is componentDidMount
    console.log("componentDidMount");
    setUserDetails();
  }, [])


  console.log("render")
  return (
    <div>
      <h1>User Detail</h1>
      {user ? (
        <ul>
          <li>ID: {user.id}</li>
          <li>NAME: {user.name}</li>
          <li>CLASS: {user.class}</li>
        </ul>
      ) : null}
      {/* <ul>
        <li>ID: {user ? user.id : null}</li>
        <li>NAME: {user ? user.name : null}</li>
        <li>CLASS: {user ? user.class : null}</li>
      </ul> */}
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
