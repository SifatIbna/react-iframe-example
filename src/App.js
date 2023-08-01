import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState('');

  const handleLinkClick = (event) => {
    event.preventDefault();
    setUrl(event.target.href);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <a href="https://www.prothomalo.com/" onClick={handleLinkClick}>
        Click me
      </a>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe src={url} style={{ width: '100%', height: '500px' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
