import React from 'react'

const TopicsFilter = ({textFilter,setTextFilter }) => {
    function updateTextFilter (e) {
        setTextFilter(e.target.value);
    }
  
  
    return (
    <div><label>Search a Topic:<input type="text" value={textFilter} onChange={updateTextFilter} /></label></div>
  )
}

export default TopicsFilter