import React from 'react';
import PlayerCards from './PlayerCards';
import '../App.css';

function DisplayData({ players }) {


  return (
    <div>
      <h1 className='playerList'>List Of Players</h1>
      <PlayerCards players={players} />
    </div>
  )
}


export default DisplayData;