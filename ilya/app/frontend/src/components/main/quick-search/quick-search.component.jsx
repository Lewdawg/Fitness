import './quick-search.styles.css';

//React Bootstrap
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import { useState, useEffect } from 'react';


function QuickSearch({
	display,
	setDisplay,
	quickSearchFilter,
	setQuickSearchFilter,
}) {


	const filters = [
		{ name: 'location', options: ['indoors', 'outdoors'] },
		{ name: 'duration', options: ['15', '30', '45'] },
		{ name: 'difficulty', options: ['easy', 'medium', 'hard'] },
	];

	useEffect(() => {

		// Returns an array of 'Carousel.Item'.
		const indicators = document.querySelectorAll(
			'#quick-search .carousel-indicators li' 		//← quick-search is the id of the carousel and I presume '.carousel-indicators li' represents the Carousel.Item within it
		);
		console.log(indicators[0]);

		// Displays the correct filter array within the 'Carousel.Item'.
		for (let i = 0; i < filters.length; i++) {
			indicators[i].textContent = filters[i].name;
		}
	}, []);


	const [index, setIndex] = useState(0);


	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};


	return (

		<Carousel
			interval={null}
			wrap={false}
			/* slide={false} */
			id="quick-search"
			activeIndex={index}
			onSelect={handleSelect}
		>
			<Carousel.Item>
				<div className="wrapper d-flex justify-content-center align-items-center">

					<Button
						onClick={(e) => {
							setQuickSearchFilter({
								...quickSearchFilter,
								location: 'indoor',
							});
							e.target.classList.add('active');
						}}
						className="fs-4 p-5 m-5"
					>
						Indoor
					</Button>

					<Button
						onClick={() =>
							setQuickSearchFilter({
								...quickSearchFilter,
								location: 'outdoor',
							})
						}
						className="fs-4 p-5 m-5"
					>
						Outdoor
					</Button>

				</div>
			</Carousel.Item>

			<Carousel.Item>
				<div className="wrapper d-flex justify-content-center align-items-center">

					<Button
						onClick={() =>
							setQuickSearchFilter({ ...quickSearchFilter, duration: '15min' })
						}
						className="fs-4 p-5 m-5"
					>
						15 Minutes
					</Button>

					<Button
						onClick={() =>
							setQuickSearchFilter({ ...quickSearchFilter, duration: '30min' })
						}
						className="fs-4 p-5 m-5"
					>
						30 Minutes
					</Button>

					<Button
						onClick={() =>
							setQuickSearchFilter({ ...quickSearchFilter, duration: '45min' })
						}
						className="fs-4 p-5 m-5"
					>
						45 Minutes
					</Button>

				</div>
			</Carousel.Item>

			<Carousel.Item>
				<div className="wrapper d-flex justify-content-center align-items-center">

					<Button
						onClick={() =>
							setQuickSearchFilter({ ...quickSearchFilter, difficulty: 'easy' })
						}
						className="fs-4 p-5 m-5"
					>
						Easy
					</Button>

					<Button
						onClick={() =>
							setQuickSearchFilter({
								...quickSearchFilter,
								difficulty: 'medium',
							})
						}
						className="fs-4 p-5 m-5"
					>
						Medium
					</Button>

					<Button
						onClick={() =>
							setQuickSearchFilter({ ...quickSearchFilter, difficulty: 'hard' })
						}
						className="fs-4 p-5 m-5"
					>
						Hard
					</Button>

					<Button
						onClick={() =>
							setDisplay({ ...display, quickSearch: false, cardList: true })
						}
						id="search-btn"
						className="fs-4 p-5 m-5"
					>
						Show Workouts
					</Button>

				</div>
			</Carousel.Item>
		</Carousel>
	);
}

export default QuickSearch;
