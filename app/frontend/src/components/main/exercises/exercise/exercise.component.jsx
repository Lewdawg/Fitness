import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Image from 'react-bootstrap/Image';
import './exercise.styles.css';

function Exercise({exercise}) {
	console.log('exercise aus einzelner exercise komponente:', exercise);
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
					{/* <ListGroup className="instructions">
						{exercise.instructions.map((instruction, index) => (
							<ListGroup.Item key={index + 1}>{instruction}</ListGroup.Item>
						))}
					</ListGroup> */}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Exercise;
