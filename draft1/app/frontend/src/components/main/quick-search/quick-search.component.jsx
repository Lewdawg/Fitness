import './quick-search.styles.css';

import { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

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

	let indicators = [];
	console.log(indicators);

	useEffect(() => {
		indicators = [...document.querySelectorAll(
			'#quick-search .carousel-indicators li'
		)];
		for (let i = 0; i < filters.length; i++) {
			indicators[i].textContent = filters[i].name;
		}
	});
	const firstCarouselItem = useRef(),
		secondCarouselItem = useRef(),
		thirdCarouselItem = useRef();

	return (
		<Carousel
			interval={null}
			wrap={false}
			/* slide={false} */
			id="quick-search"
		>
			<Carousel.Item ref={firstCarouselItem}>
				<div className="wrapper d-flex justify-content-center align-items-center">
					<Button
						onClick={(e) => {
							setQuickSearchFilter({
								...quickSearchFilter,
								location:
									quickSearchFilter.location === 'indoor' ? '' : 'indoor',
							});
							firstCarouselItem.current.classList.remove(
								'active'
							);
							firstCarouselItem.current.classList.add(
								'carousel-item-left'
							);
							secondCarouselItem.current.classList.add(
								'active'
							);
						}}
						className={
							quickSearchFilter.location === 'indoor'
								? 'fs-4 p-5 m-5 active'
								: 'fs-4 p-5 m-5'
						}
					>
						Indoor
					</Button>
					<Button
						onClick={() =>
							setQuickSearchFilter({
								...quickSearchFilter,
								location:
									quickSearchFilter.location === 'outdoor' ? '' : 'outdoor',
							})
						}
						className={
							quickSearchFilter.location === 'outdoor'
								? 'fs-4 p-5 m-5 active'
								: 'fs-4 p-5 m-5'
						}
					>
						Outdoor
					</Button>
				</div>
			</Carousel.Item>

			<Carousel.Item ref={secondCarouselItem}>
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

			<Carousel.Item ref={thirdCarouselItem}>
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
