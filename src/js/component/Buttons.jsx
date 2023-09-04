import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Buttons = () => {
    return (
    <ButtonGroup>
      <Button className='buttonBG'><FontAwesomeIcon icon={faPause} style={{color: "#ffffff",}}/></Button>
      <Button className='buttonBG'>Reset</Button>
      <Button className='buttonBG'><FontAwesomeIcon icon={faHourglass} style={{color: "#ffffff",}} /></Button>
    </ButtonGroup>
  );
}

export default Buttons