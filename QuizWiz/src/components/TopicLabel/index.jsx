import React from 'react';

const TopicLabel = ({ id, name, onClick, selected }) => {
  return (
    <div className='topic-label-container'
      onClick={() => onClick(id)}
      style={{ cursor: 'pointer', color: selected ? '#ff7aa9' : 'white' }}
    >
      <h3>{name}</h3>
    </div>
  );
};
export default TopicLabel;
