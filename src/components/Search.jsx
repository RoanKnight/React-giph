import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState('');

  const GiphyURL = 'http://api.giphy.com/v1/gifs/search';
  const GiphyAPIKey = '5g6VIc5vpQxxhL8TRtmYVniAaTlQb0yC';

  const handleSearch = () => {
    axios.get(`${GiphyURL}?api_key=${GiphyAPIKey}&q=${searchTerm}`)
      .then(({ data }) => {
        console.log(data);
        props.setGifs(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleClick = () => {
    if (!searchTerm) {
      alert('Please enter a search term');
      return;
    }

    handleSearch();
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default Search;