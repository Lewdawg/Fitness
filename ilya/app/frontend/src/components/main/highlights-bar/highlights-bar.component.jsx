import './highlights-bar.styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HighlightsBar() {


	return (

		<Container id="highlights-bar">
			<Row>
				<Col>Total Calories Burned: 25523cal</Col>
				<Col>Total Workouts Completed: 104</Col>
				<Col>Total Repetitions Executed: 17005</Col>
			</Row>
		</Container>
	);
}

export default HighlightsBar;
