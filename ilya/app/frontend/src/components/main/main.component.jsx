import './main.styles.css';

import HighlightsBar from './highlights-bar/highlights-bar.component.jsx';
import SelectButtons from './select-buttons/select-buttons.component.jsx';
import QuickSearch from './quick-search/quick-search.component.jsx';
import CardList from './card-list/card-list.component.jsx';


function Main( { workouts, display, setDisplay, quickSearchFilter, setQuickSearchFilter } ) {
	return (
		<main id='main' className="position-relative">

			<HighlightsBar />

			{display.selectButtons && (<SelectButtons {...{ display, setDisplay, quickSearchFilter, setQuickSearchFilter}} />)}

			{display.quickSearch && (<QuickSearch {...{ display, setDisplay, quickSearchFilter, setQuickSearchFilter }} />)}

			{display.cardList && (<CardList {...{ workouts, display, setDisplay, quickSearchFilter}} />)}

		</main>
	);
}

export default Main;
