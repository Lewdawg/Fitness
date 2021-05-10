import './header.styles.css';
import { NavLink } from 'react-router-dom';
import Logo from './logos/black.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import HighlightsBar from './highlights-bar/highlights-bar.component.jsx';
import HighlightsTicker from './highlights-ticker/highlights-ticker.component.jsx';

function Header({ placeholder, setPlaceholder, display, setDisplay }) {
	return (
		<header id="header">
			<Navbar collapseOnSelect expand="lg">
				<NavLink to="/">
					<Navbar.Brand
					/* href="/" */
					/* onClick={() =>
							setDisplay({
								...display,
								selectButtons: true,
								quickSearch: false,
								cardList: false,
							})
						} */
					>
					{/* 	<Image
							roundedCircle
							src={Logo}
							width="40"
							height="40"
							className="d-inline-block align-top"
							alt="workouts logo"
						/> */}

					</Navbar.Brand>
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavLink className="nav-link" role="button" to="/exercises">
							Exercises
						</NavLink>
						<NavLink
							onClick={() => {
								setPlaceholder({
									...placeholder,
									loggedIn: false,
								});
							}}
							className="nav-link"
							role="button"
							to="/login"
						>
							{placeholder.loggedIn ? 'Logout' : 'Login'}
						</NavLink>
						{!placeholder.loggedIn && (
							<NavLink className="nav-link" role="button" to="/register">
								Register
							</NavLink>
						)}
						{placeholder.loggedIn && (
							<NavLink className="nav-link" role="button" to="/profile">
								Profile
							</NavLink>
						)}
						<NavLink className="nav-link" role="button" to="/contact">
							Contact
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* <HighlightsTicker /> */}
			<HighlightsBar />
		</header>
	);
}

export default Header;
