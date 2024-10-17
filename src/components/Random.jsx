import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Random = (props) => {

  const GiphyURL = 'http://api.giphy.com/v1/gifs/random';
  const GiphyAPIKey = '5g6VIc5vpQxxhL8TRtmYVniAaTlQb0yC';

  const handleSearch = () => {
    axios.get(`${GiphyURL}?api_key=${GiphyAPIKey}`)
      .then(({ data }) => {
        console.log(data);
        props.setGifs([data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Button onClick={handleSearch}>Random</Button>
    </div>
  );
}

export default Random;