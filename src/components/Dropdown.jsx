import { Dropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DropdownMenu = (props) => {

  const [limit, setLimit] = useState(20);
  const { setGifs } = props;

  const GiphyURL = 'http://api.giphy.com/v1/gifs/trending';
  const giphyAPIKey = '5g6VIc5vpQxxhL8TRtmYVniAaTlQb0yC';

  useEffect(() => {
    axios.get(`${GiphyURL}?apiKey=${giphyAPIKey}&limit=${limit}`)
      .then(({ data }) => {
        console.log(data);
        setGifs(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [limit]);

  const handleChange = (key) => {
    setLimit(key);
  }

  return (
    <div>
      <Dropdown onSelect={handleChange}>
        <Dropdown.Toggle variant='success'>
          Result limit
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey={20}>20</Dropdown.Item>
          <Dropdown.Item eventKey={50}>50</Dropdown.Item>
          <Dropdown.Item eventKey={100}>100</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownMenu;