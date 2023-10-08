import React from 'react'
import data from './Data'
import PlayersListe from './playersListe'

function Player() {
  return (
    <div>
      {data.map((e)=> <PlayersListe   e= {e}     />     )}
    </div>
  )
}

export default Player
