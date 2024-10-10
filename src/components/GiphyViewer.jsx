import { Row } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Search from './Search';

const GiphCard = (props) => {

  const { image, title, url } = props;

  return (
    <Card>
      <Card.Img variant='top' src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Link href={url}>View Giphy</Card.Link>
      </Card.Body>
    </Card>
  );
}

const GiphyViewer = () => {

  const GiphyURL = 'http://api.giphy.com/v1/gifs/trending';
  const giphyAPIKey = '5g6VIc5vpQxxhL8TRtmYVniAaTlQb0yC';

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    axios.get(`${GiphyURL}?apiKey=${giphyAPIKey}`)
      .then(({ data }) => {
        console.log(data);
        setGifs(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (

    <div>

      <Search setGifs={setGifs}/>

      <Row xs={1} md={2} lg={3}>
        {
          gifs.map((gif) => {
            return (
              <GiphCard key={gif.id} url={gif.url} title={gif.title} image={gif.images.fixed_width.url} />
            );
          })
        }
      </Row>
    </div>
  );
}

export default GiphyViewer;