import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Bootstrapcard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/12/17/18/51/spices-1914130_960_720.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Bootstrapcard;