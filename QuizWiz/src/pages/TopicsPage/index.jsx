import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { TopicsFilter, TopicLabel } from '../../components';
import { QuizInstructionsWrapper } from '../../components';

const TopicsPage = () => {
  const [topics, setTopics] = useState([]);
  const [textFilter, setTextFilter] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const navigateTo = useNavigate()


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
      setSelectedTopic((prev) => 
      (prev === topicId ? null : topicId));
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
      <TopicLabel key={t._id} id={t._id} name={t.name} onClick={() => toggleTopic(t._id)} selected={selectedTopic === t._id} />
    ));
}

const startQuiz = () => {
  localStorage.setItem('selectedTopic', JSON.stringify(selectedTopic))
  // Use selectedTopics to start the quiz
  console.log('Selected Topic:', selectedTopic);
  // Redirect to the quiz page or perform any other action
  navigateTo('/test/quiz');
};

return (
  <div className="topics"> {}
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
    <QuizInstructionsWrapper />
  </div>
);
}

export default TopicsPage;