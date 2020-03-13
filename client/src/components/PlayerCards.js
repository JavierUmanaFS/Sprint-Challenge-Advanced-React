import React from 'react';
import '../App.css';

function PlayerCards({ players }) {
  return (
    <div
      data-testid='playerCard' className='playerCardContainer'>
      {players.map((player, index) => {
        return (
          <div className='playerCard' key={index}>
            <h2>Name: {player.name}</h2>
            <h3>Country: {player.country}</h3>
            <p>Searches: {player.searches}</p>
          </div>
        )
      })}
    </div>
  )
}

export default PlayerCards;