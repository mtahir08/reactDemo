import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'

import { Button, Collapse } from "react-bootstrap";
function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
  );
  // return (
  //   <div>
  //     <Button variant="outline-primary">Primary</Button>
  //     <Card style={{ width: '18rem' }}>
  //       <Card.Img variant="top" src="holder.js/100px180" />
  //       <Card.Body>
  //         <Card.Title>Card Title</Card.Title>
  //         <Card.Text>
  //           Some quick example text to build on the card title and make up the bulk of
  //           the card's content.
  //   </Card.Text>
  //         <Button variant="primary">Go somewhere</Button>
  //       </Card.Body>
  //     </Card>
  //   </div>
  // );
}

export default App;
