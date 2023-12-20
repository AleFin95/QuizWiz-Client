import React, {useState, useEffect} from 'react'
import './style.css'

import { ScoreTable } from '../../components'

function Leaderboard() {
  const [scores, setScores]=useState([])
  
  useEffect(() => {
    //fetch the score data
    const data = [
      { "value": 85, "username": "user1" },
      { "value": 92, "username": "user2" },
      { "value": 78, "username": "user3" },
      { "value": 95, "username": "user4" }
    ]
    
    const sortedData = data.sort((a, b) => b.value - a.value);

    //assign the data to a varable

    setScores(sortedData)

  },[])


  return (
    <>
        <h2>Leaderboard</h2>
        <div className="leaderboardContainer">
          <table className="leaderboardTable">
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) =><ScoreTable key={index} rank ={index+1} score={score} />)}
            </tbody>
          </table>
        </div>
    </>
  )
}

export default Leaderboard