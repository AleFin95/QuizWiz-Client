import React, { useState, useEffect } from 'react';
import { TopicsFilter, TopicLabel } from '../../components';

const TopicsPage = () => {
  const [topics, setTopics] = useState([]);
  const [textFilter, setTextFilter] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);


  useEffect(() => {
    async function loadTopics() {
        const response = await fetch("https://quizwiz-api.onrender.com/subjects");
        const data = await response.json();
        //console.log(data)
        setTopics(data);
    };
    
    loadTopics();
}, [])

const toggleTopic = (topicId) => {
  setSelectedTopics((prev) => {
    const isSelected = prev.includes(topicId);
    return isSelected ? prev.filter((id) => id !== topicId) : [...prev, topicId];
  });
};

const onEnterPress = () => {
  // Get the first topic that matches the filter
  const filteredTopics = topics.data.filter(t => t.name.toLowerCase().includes(textFilter.toLowerCase()));

  if (filteredTopics.length > 0) {
    const firstTopic = filteredTopics[0];
    toggleTopic(firstTopic._id);
  }
};


function displayTopics() {
  if (!topics || !topics.data || !Array.isArray(topics.data)) {
    return null; 
  }

  return topics.data
  .filter(t => textFilter.length === 0 || t.name.toLowerCase().includes(textFilter.toLowerCase()))
    .map(t => (
      <TopicLabel key={t._id} id={t._id} name={t.name} onClick={() => toggleTopic(t._id)} selected={selectedTopics.includes(t._id)} />
    ));
}

const startQuiz = () => {
  localStorage.setItem('selectedTopics', JSON.stringify(selectedTopics))
  // Use selectedTopics to start the quiz
  console.log('Selected Topics:', selectedTopics);
  // Redirect to the quiz page or perform any other action
};

  return (
    <>
    <h1>TopicsPage</h1>
    <TopicsFilter
        textFilter={textFilter}
        setTextFilter={setTextFilter}
        onEnterPress={onEnterPress}
        />
    <div>
      { displayTopics() }
    </div>
    <p>
      <button type="button" onClick={startQuiz}>
          Start Quiz
        </button>
    </p>
    </>
  )
}

export default TopicsPage