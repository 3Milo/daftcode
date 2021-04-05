import { useState } from 'react';
import './SearchPanel.scss';

function SearchPanel(props) {

  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {

    let value = e.target.value
      .replace(/[^A-Za-z ]|^\s/g, '') // replace numbers, symbols, separators different than space, or space on the beginning
      .replace(/\s+/g, ' '); // replace multiple spaces next to each other in one space

    setInputValue(value);
    props.onSearch(value);
  };

  return (
    <div className="search-panel">
      <div className="search-panel__ellipse"></div>
      <div className="search-panel__ellipse"></div>
      <div className="search-panel__ellipse"></div>
      <input className="search-panel__input" aria-label="search-input" onChange={handleChange} value={inputValue}></input>
    </div>
  );
}

export default SearchPanel;