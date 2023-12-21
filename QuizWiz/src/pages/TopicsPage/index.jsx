import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  QuizInstructionsWrapper,
  TopicLabel,
  TopicsFilter
} from '../../components';

const TopicsPage = () => {
  const [topics, setTopics] = useState([]);
  const [textFilter, setTextFilter] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    async function loadTopics() {
      try {
        const response = await fetch('https://quizwiz-api.onrender.com/subjects');
        const data = await response.json();
        setTopics(data);
      } catch (error) {
        console.error('Error loading topics:', error);
      }
    }

    loadTopics();
  }, []);

  const toggleTopic = (topicId) => {
    setSelectedTopic((prev) => (prev === topicId ? null : topicId));
  };

  const onEnterPress = () => {
    const filteredTopics = topics.data.filter((t) =>
      t.name.toLowerCase().includes(textFilter.toLowerCase())
    );

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
      .filter(
        (t) =>
          textFilter.length === 0 ||
          t.name.toLowerCase().includes(textFilter.toLowerCase())
      )
      .map((t) => (
        <TopicLabel
          key={t._id}
          id={t._id}
          name={t.name}
          onClick={() => toggleTopic(t._id)}
          selected={selectedTopic === t._id}
        />
      ));
  }

  const startQuiz = () => {
    if (selectedTopic !== null) {
      localStorage.setItem('selectedTopic', JSON.stringify(selectedTopic));
      console.log('Selected Topic:', selectedTopic);
      navigateTo('/test/quiz');
    } else {
      console.error('Please select a topic before starting the quiz.');
    }
  };

  return (
    <div className='topics'>
      <h2 className='page'></h2>
      <TopicsFilter
        textFilter={textFilter}
        setTextFilter={setTextFilter}
        onEnterPress={onEnterPress}
      />
      <div className='displaytopics'>{displayTopics()}</div>
      <p>
        <button type='button' className='navigation-button' onClick={startQuiz}>
          Start Quiz
        </button>
      </p>
      <QuizInstructionsWrapper />
    </div>
  );
};

export default TopicsPage;
