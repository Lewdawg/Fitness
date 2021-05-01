import './header.styles.css';

//React-Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

// Props past form App.js ↓
function Header({ display, setDisplay }) {

	return (

		<header id="header">

			<Navbar collapseOnSelect bg="primary" variant="dark" expand="lg">

				{/* When click Logo takes to back to home page */}
				<Navbar.Brand
					onClick={() =>
						setDisplay({
							...display,
							selectButtons: true,
							quickSearch: false,
							cardList: false,
						})
					}
				>

					{/* Logo */}
					<Image
						roundedCircle
						src="https://static.vecteezy.com/system/resources/thumbnails/000/595/983/small/04012019-25.jpg"
						width="40"
						height="40"
						className="d-inline-block align-top"
						alt="workouts logo"
					/>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				{/* Div to store the Navbar links */}
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Exercises</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<Nav.Link href="#link">Login</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>

			</Navbar>
		</header>
	);
}

export default Header;
