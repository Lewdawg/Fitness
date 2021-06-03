import './quick-search.styles.css';

import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function QuickSearch({ quickSearchFilter, setQuickSearchFilter }) {
	const [itemIndex, setItemIndex] = useState(0);
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
			activeIndex={itemIndex}
			onSelect={(selectedIndex, e) =>
				setItemIndex(selectedIndex)}
		>
			<Carousel.Item>
				<Button
					onClick={() => {
						setQuickSearchFilter({
							...quickSearchFilter,
							location: quickSearchFilter.location === 'indoor' ? '' : 'indoor',
						});
						setItemIndex(itemIndex + 1);
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
						setItemIndex(itemIndex + 1);
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
						setItemIndex(itemIndex + 1);
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
						setItemIndex(itemIndex + 1);
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
						setItemIndex(itemIndex + 1);
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
