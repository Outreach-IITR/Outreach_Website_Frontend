import React from 'react';
import NavbarFix from '../NavbarFix/NavbarFix';
import Campuslife from './Campuslife';
import Groups from './Groups';
import Hostellife from './Hostellife';
// import Campuslife from './Campuslife';

const Life = () => {
  return (
    <div>
      <Hostellife />
      <Campuslife />
      <NavbarFix />
      <Groups />
    </div>
  )
}

export default Life
