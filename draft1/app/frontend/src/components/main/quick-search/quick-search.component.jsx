import './quick-search.styles.css';

import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function QuickSearch({ quickSearchFilter, setQuickSearchFilter }) {
	/* 	const filters = [
		{ name: 'location', options: ['indoors', 'outdoors'] },
		{ name: 'duration', options: ['15', '30', '45'] },
		{ name: 'difficulty', options: ['easy', 'medium', 'hard'] },
	]; */

	return (
		<Carousel
			interval={null}
			wrap={false}
			/* slide={false} */
			id="quick-search"
			className="fadeInDown"
		>
			<Carousel.Item>
				<Button
					onClick={() => {
						setQuickSearchFilter({
							...quickSearchFilter,
							location: quickSearchFilter.location === 'indoor' ? '' : 'indoor',
						});
						document.querySelector('.carousel-control-next').click();
					}}
					className={quickSearchFilter.location === 'indoor' ? 'active' : ''}
				>
					Indoor
				</Button>
				<Button
					onClick={() => {
						setQuickSearchFilter({
							...quickSearchFilter,
							location:
								quickSearchFilter.location === 'outdoor' ? '' : 'outdoor',
						});
						document.querySelector('.carousel-control-next').click();
					}}
					className={quickSearchFilter.location === 'outdoor' ? 'active' : ''}
				>
					Outdoor
				</Button>
			</Carousel.Item>

			<Carousel.Item>
				<Button
					onClick={() => {
						setQuickSearchFilter({
							...quickSearchFilter,
							duration: quickSearchFilter.duration === '15 min' ? '' : '15 min',
						});
						document.querySelector('.carousel-control-next').click();
					}}
					className={quickSearchFilter.duration === '15 min' ? 'active' : ''}
				>
					15 Minutes
				</Button>
				<Button
					onClick={() => {
						setQuickSearchFilter({
							...quickSearchFilter,
							duration: quickSearchFilter.duration === '30 min' ? '' : '30 min',
						});
						document.querySelector('.carousel-control-next').click();
					}}
					className={quickSearchFilter.duration === '30 min' ? 'active' : ''}
				>
					30 Minutes
				</Button>
				<Button
					onClick={() => {
						setQuickSearchFilter({
							...quickSearchFilter,
							duration: quickSearchFilter.duration === '45 min' ? '' : '45 min',
						});
						document.querySelector('.carousel-control-next').click();
					}}
					className={quickSearchFilter.duration === '45 min' ? 'active' : ''}
				>
					45 Minutes
				</Button>
			</Carousel.Item>

			<Carousel.Item>
				<Button
					onClick={() =>
						setQuickSearchFilter({
							...quickSearchFilter,
							difficulty: quickSearchFilter.difficulty === 'easy' ? '' : 'easy',
						})
					}
					className={quickSearchFilter.difficulty === 'easy' ? 'active' : ''}
				>
					Easy
				</Button>
				<Button
					onClick={() =>
						setQuickSearchFilter({
							...quickSearchFilter,
							difficulty:
								quickSearchFilter.difficulty === 'medium' ? '' : 'medium',
						})
					}
					className={quickSearchFilter.difficulty === 'medium' ? 'active' : ''}
				>
					Medium
				</Button>
				<Button
					onClick={() =>
						setQuickSearchFilter({
							...quickSearchFilter,
							difficulty: quickSearchFilter.difficulty === 'hard' ? '' : 'hard',
						})
					}
					className={quickSearchFilter.difficulty === 'hard' ? 'active' : ''}
				>
					Hard
				</Button>
				<Button id="search-btn">
					<NavLink
						to="/workouts"
						onClick={() =>
							setQuickSearchFilter({ ...quickSearchFilter, active: true })
						}
					>
						Show Workouts
					</NavLink>
				</Button>
			</Carousel.Item>
		</Carousel>
	);
}

export default QuickSearch;
