import React, { PureComponent } from 'react'
import Title from '../components/Title'
import Player, { playerShape } from '../components/Player'
import Podium from './Podium'
import PropTypes from 'prop-types'
import './Board.css'

export default class Board extends PureComponent {
  static propTypes = {
    players: PropTypes.arrayOf(playerShape).isRequired,
    updatePlayer: PropTypes.func.isRequired
  }
  render() {
    const { players, updatePlayer } = this.props

    return (
      <div>
        <Title content="Scoreboard" />
        <Podium players={players}/>
        <ul className="Board">
          {players.map((player, index) => (
            <Player 
              key={index} 
              onChange={updatePlayer}
              { ...player } 
            />
          )).sort((a,b) => {
            return (a.props.score > b.props.score) ? -1 : 1
          })}
        </ul>
      </div>
    )
  }
}
