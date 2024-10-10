import { Container, Row, Col } from 'react-bootstrap';
import GiphyViewer from './components/GiphyViewer';

function App() {

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <GiphyViewer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
