import './header.styles.css';
import HighlightsBar from './highlights-bar/highlights-bar.component.jsx';
import HighlightsTicker from './highlights-ticker/highlights-ticker.component.jsx';
/* import NavbarCustom from './navbar-custom/navbar-custom.component.jsx'; */
/* import NavbarCustomPure from './navbar-custom-pure/navbar-custom-pure.component.jsx'; */
import NavbarCustom from './navbar-custom/navbar-custom.component.jsx';



function Header({ placeholder, setPlaceholder, display, setDisplay }) {
	return (
		<header id="header">
			{/* <NavbarCustomPure {...{placeholder, setPlaceholder}}/> */}
			<NavbarCustom {...{placeholder, setPlaceholder}} />
			{/* <HighlightsTicker /> */}
			{/* <HighlightsBar /> */}
		</header>
	);
}

export default Header;
