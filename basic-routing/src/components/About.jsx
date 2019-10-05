import React from 'react';

const About = (props) => {
  return (
    <div>
      This is About page
      <br />
      <button onClick={() => {
        setTimeout(() => {
          props.history.push('/')
        }, 2000)
      }}>Goto Home</button>
      <button onClick={() => { props.history.push('/contact') }}>Goto Contact</button>
    </div>
  );
}

export default About;
