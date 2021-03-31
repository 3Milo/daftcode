import { useState } from 'react';
import './SearchPanel.scss';

function SearchPanel(props) {

  const [value, setValue] = useState('');

  const handleChange = e => {

    //TODO:
    let value = e.target.value.replace(/\s\s+/g, ' ');

    setValue(value);
    props.onSearch(value);
  };

  return (
    <div className="search-panel">
      <div className="search-panel__ellipse"></div>
      <div className="search-panel__ellipse"></div>
      <div className="search-panel__ellipse"></div>
      <input className="search-panel__input" onChange={handleChange} value={value}></input>
    </div>
  );
}

export default SearchPanel;