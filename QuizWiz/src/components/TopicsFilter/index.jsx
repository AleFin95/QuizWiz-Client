import React from 'react'

const TopicsFilter = ({textFilter,setTextFilter, onEnterPress  }) => {
    function updateTextFilter (e) {
        setTextFilter(e.target.value);
    }
  
    function handleKeyDown(e) {
      if (e.key === 'Enter') {
        onEnterPress(textFilter);
      }
    }
    return (
    <div><label>Search a Topic:<input type="text" value={textFilter} onChange={updateTextFilter} onKeyDown={handleKeyDown}/></label></div>
  )
}

export default TopicsFilter