import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import banana from '../banana.jpg';


function ExerciseTabCard() {

    // 

    return (

        <Card className="theExerciseTabCard">
            <Card.Body>
                <Card.Title className='m-3'><h2>Exercise.Title</h2></Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}

                <a href="https://www.youtube.com/watch?v=aclHkVaku9U" target='_blank'><Image src={banana} className='exerciseVid' rounded /></a>

                <Card.Text>
                    <ol className="">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
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

    )
}

export default ExerciseTabCard
