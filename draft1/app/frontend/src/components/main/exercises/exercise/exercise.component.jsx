import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import banana from '../banana.jpg';
import './exercise.styles.css';

function Exercise({ exercise }) {
	return (
		<Card className="exercise fadeInDown second">
			<Card.Body>
				<Card.Title className="m-3">
					<h2>{exercise.title}</h2>
				</Card.Title>
				{/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}

				<a href="https://www.youtube.com/watch?v=aclHkVaku9U" target="_blank">
					<Image src={exercise.img} className="exerciseVid" rounded />
				</a>

				<Card.Text>
					<ol className="instructions">
						{exercise.instructions.map((instruction, index) => (
							<li key={index + 1}>{instruction}</li>
						))}
					</ol>
					{/* <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup> */}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Exercise;
