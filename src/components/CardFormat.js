import { Container, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

function CardFormat(props) {

  const [mydata, setData] = useState([]);

  const apiget = () => {
    fetch(props.url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data.articles)
      }
      );
  };
  useEffect(() => {
    apiget();
    const interval = setInterval(() => { apiget(); }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid>
      <Row xs={1} md={3} className="g-4">
        {
          mydata.map(
            (value) => {
              return (
                <>
                  <Col className="container-fluid mt-4">
                    <Card>
                      <Card.Img variant="top" src={value.imageUrl} height="250px" />
                      <Card.Body>
                        <Card.Title>{value.title}</Card.Title>
                        <Card.Text>
                          {value.content}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )
            }
          )
        }
      </Row>
    </Container>
  );
}

export default CardFormat;
