import './navbar-custom.styles.css';
import { useState, useContext } from 'react';
import AppContext from '../../../contexts/AppContext.js';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HighlightsIcons from './highlights-icons/highlights-icons.component.jsx';
import axios from 'axios';

function NavbarCustom() {
	const [navbarExpanded, setNavbarExpanded] = useState(false);
	const { loggedIn, setLoggedIn } = useContext(AppContext);

	return (
		<Navbar
			id="navbar-custom"
			onClick={() => setNavbarExpanded(false)}
			collapseOnSelect
			expanded={navbarExpanded}
			expand="lg"
		>
			<NavLink to="/">
				<Navbar.Brand>
					<svg
						version="1.1"
						id="logo"
						xmlns="http://www.w3.org/2000/svg"
						/* xmlns:xlink="http://www.w3.org/1999/xlink" */
						viewBox="0 0 1000 800"
					>
						<path
							d="M877.148,729.773c-6.25,17.645-11.205,31.596-18.054,43.26
		c67.022-80.767,107.329-184.502,107.329-297.657C966.424,217.777,757.597,8.952,500,8.952
		c-257.599,0-466.424,208.825-466.424,466.424c0,113.155,40.306,216.893,107.33,297.659c-6.849-11.664-11.806-25.619-18.059-43.266
		c-6.418-18.113-14.405-40.656-27.635-70.341c-17.487-39.235-10.495-80.923,2.551-115.003c-3.826-22.449-5.846-45.512-5.846-69.05
		C91.918,249.998,274.622,67.294,500,67.294c225.377,0,408.081,182.704,408.081,408.082c0,23.538-2.021,46.603-5.848,69.052
		c13.048,34.08,20.036,75.768,2.553,115.001C891.555,689.117,883.567,711.66,877.148,729.773z"
						/>
						<path
							d="M845.563,478.728C827.505,436.865,784,419.631,784,419.631v32.012l-4.924-32.012
		c-10.671-76.337-68.127-81.262-68.127-81.262c-43.503-27.908-102.602-3.284-102.602-3.284l-30.822,13.76
		c-5.989,2.674-10.575-5.735-5.085-9.323l0,0l-4.713-26.458c-1.442-8.106-11.015-2.857-16.31,1.514
		c6.446-12.351,19.027-48.838,22.455-55.007c4.104-7.387,14.776-27.908,7.387-31.191c-7.387-3.283-11.49,2.463-11.49,2.463
		s15.595-29.55,0.82-74.695C555.815,111.003,500,110.182,500,110.182s-55.817,0.821-70.592,45.965
		c-14.773,45.145,0.821,74.695,0.821,74.695s-4.104-5.746-11.49-2.463c-7.389,3.283,3.282,23.804,7.387,31.191
		c3.438,6.188,15.508,42.876,21.752,55.12c-4.988-4.033-13.804-8.597-15.084-0.484l-4.113,26.049
		c5.38,3.516,0.886,11.756-4.983,9.136l-32.046-14.306c0,0-59.098-24.625-102.602,3.284c0,0-57.456,4.925-68.128,81.262
		l-4.925,32.012v-32.012c0,0-43.503,17.234-61.562,59.097c0,0-74.693,91.11-41.04,166.626
		c33.653,75.515,34.475,106.706,56.637,126.406c22.162,19.699,45.965,0.82,52.53-5.746c6.568-6.566,23.806-13.134,22.163-25.445
		c-1.641-12.313-7.388-25.444-21.341-33.654c-13.953-8.207-37.759-11.49-45.146-21.341c-7.388-9.851-9.85-38.578-4.103-48.427
		c5.745-9.852,32.011-27.91,31.189-76.336c-0.82-48.429,4.926-45.966,4.926-45.966l3.283,35.295c0,0,50.07-10.671,64.845-40.222
		c14.774-29.548,29.549-36.115,29.549-36.115s-24.624,28.729-18.059,48.43c6.566,19.697,63.202,74.693,66.486,102.602
		c0,0,6.566-15.598,0.821-40.222c-5.746-24.622,24.625-56.636,60.74-73.871c0,0-48.428,34.473-51.711,58.276
		c-3.284,23.805,7.387,48.429-5.747,66.486c0,0,27.047,95.924-8.618,113.683L500,791.048l148.156-41.861
		c-35.664-17.759-8.617-113.683-8.617-113.683c-13.134-18.058-2.463-42.682-5.747-66.486c-3.283-23.804-51.712-58.276-51.712-58.276
		c36.117,17.235,66.486,49.249,60.74,73.871c-5.744,24.624,0.82,40.222,0.82,40.222c3.285-27.908,59.921-82.904,66.488-102.602
		c6.566-19.701-18.058-48.43-18.058-48.43s14.774,6.567,29.548,36.115c14.774,29.551,64.844,40.222,64.844,40.222l3.283-35.295
		c0,0,5.747-2.463,4.927,45.966c-0.822,48.426,25.444,66.484,31.189,76.336c5.746,9.849,3.285,38.576-4.104,48.427
		c-7.385,9.851-31.19,13.134-45.145,21.341c-13.954,8.21-19.7,21.342-21.342,33.654c-1.641,12.312,15.597,18.879,22.164,25.445
		c6.564,6.566,30.371,25.445,52.532,5.746c22.161-19.7,22.981-50.892,56.636-126.406
		C920.258,569.838,845.563,478.728,845.563,478.728z"
						/>
					</svg>
				</Navbar.Brand>
			</NavLink>
			<Navbar.Toggle
				onClick={(e) => {
					e.stopPropagation();
					setNavbarExpanded(!navbarExpanded);
				}}
				aria-controls="responsive-navbar-nav"
			/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<div className="navbar-collapse-backdrop"></div>
				<Nav className="mr-auto">
					<NavLink className="nav-link" role="button" to="/exercises">
						Exercises
					</NavLink>
					<NavLink
						onClick={() => {
							axios.post('api/logout').then(setLoggedIn(false)).catch(console.warn);
						}}
						className="nav-link"
						role="button"
						to="/login"
					>
						{loggedIn ? 'Logout' : 'Login'}
					</NavLink>
					{!loggedIn && (
						<NavLink className="nav-link" role="button" to="/register">
							Register
						</NavLink>
					)}
					{loggedIn && (
						<NavLink className="nav-link" role="button" to="/profile">
							Profile
						</NavLink>
					)}
					<NavLink className="nav-link" role="button" to="/contact">
						Contact
					</NavLink>
					{/* <NavLink className="nav-link" role="button" to="/map">
						Map
					</NavLink> */}
				</Nav>
			</Navbar.Collapse>
			<HighlightsIcons {...{ navbarExpanded }} />
		</Navbar>
	);
}

export default NavbarCustom;
