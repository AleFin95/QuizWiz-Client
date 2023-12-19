import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { TopicsFilter } from '../../components';

const TopicsPage = () => {
  const [topics, setTopics] = useState([]);
  const [textFilter, setTextFilter] = useState("");


  useEffect(() => {
    async function loadTopics() {
        const response = await fetch("http://localhost:3000/subjects");
        const data = await response.json();
        setTopics(data);
    };
    
    loadTopics();
}, [])


function displayTopics() {
  return topics
          .filter(s => textFilter.length == 0 || s.name.toLowerCase().includes(textFilter.toLowerCase()))
          .map(s => <SnackCard key={s.id} id={s.id} name={s.name}/>)
}

  return (
    <>
    <h1>TopicsPage</h1>
    <TopicsFilter
        textFilter={textFilter}
        setTextFilter={setTextFilter}
        />
    <div>
      { displayTopics() }
    </div>
    <p><Link to="/test/quiz" >Quiz</Link></p>
    </>
  )
}

export default TopicsPage