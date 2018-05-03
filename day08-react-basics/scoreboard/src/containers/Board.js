import React, { PureComponent } from 'react'
import Title from '../components/Title'
import Player, { playerShape } from '../components/Player'
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
        <ul className="Board">
          {players
              .sort((a,b) => {
                          return (a.score > b.score) ? -1 : 1
              })
              .map((player, index) => (
            <Player 
              key={index} 
              onChange={updatePlayer}
              { ...player } 
            />
          ))}
        </ul>
      </div>
    )
  }
}
