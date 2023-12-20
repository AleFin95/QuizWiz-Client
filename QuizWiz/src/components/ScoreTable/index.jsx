import React from 'react'
import './style.css'

function ScoreTable({ score, rank }) {
  if (!score) {
    return <p>No score data available</p>;
  }
  return (
        <tr className="tableRow">
          <td className="rankColumn">{rank}</td>
          <td>{score.username}</td>
          <td>{score.value}</td>
        </tr>
  )
}

export default ScoreTable