import './quick-search.styles.css';

import { useState, useContext } from 'react';
import AppContext from '../../../contexts/AppContext.js';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function QuickSearch() {
	const {quickSearchFilter, setQuickSearchFilter} = useContext(AppContext)
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
			onSelect={(selectedIndex, e) => setItemIndex(selectedIndex)}
		>
			<Carousel.Item>
				<div>
					<Button
						onClick={() => {
							setQuickSearchFilter({
								...quickSearchFilter,
								location:
									quickSearchFilter.location === 'indoor' ? '' : 'indoor',
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
				</div>
			</Carousel.Item>

			<Carousel.Item>
				<div>
					<Button
						onClick={() => {
							setQuickSearchFilter({
								...quickSearchFilter,
								duration:
									quickSearchFilter.duration === '<=20' ? '' : '<=20',
							});
							setItemIndex(itemIndex + 1);
						}}
						className={quickSearchFilter.duration === '<=20' ? 'active' : ''}
					>
						{`under 20 Min`}
					</Button>
					<Button
						onClick={() => {
							setQuickSearchFilter({
								...quickSearchFilter,
								duration:
									quickSearchFilter.duration === '>20 & <=40' ? '' : '>20 & <=40'
							});
							setItemIndex(itemIndex + 1);
						}}
						className={quickSearchFilter.duration === '>20 & <=40' ? 'active' : ''}
					>
						{'20 to 40 Mins'}
					</Button>
					<Button
						onClick={() => {
							setQuickSearchFilter({
								...quickSearchFilter,
								duration:
									quickSearchFilter.duration === '>40' ? '' : '>40',
							});
							setItemIndex(itemIndex + 1);
						}}
						className={quickSearchFilter.duration === '>40' ? 'active' : ''}
					>
						{'40+ Mins'}
					</Button>
				</div>
			</Carousel.Item>

			<Carousel.Item>
				<div>
					<Button
						onClick={() =>
							setQuickSearchFilter({
								...quickSearchFilter,
								difficulty:
									quickSearchFilter.difficulty === 'easy' ? '' : 'easy',
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
						className={
							quickSearchFilter.difficulty === 'medium' ? 'active' : ''
						}
					>
						Medium
					</Button>
					<Button
						onClick={() =>
							setQuickSearchFilter({
								...quickSearchFilter,
								difficulty:
									quickSearchFilter.difficulty === 'hard' ? '' : 'hard',
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
				</div>
			</Carousel.Item>
		</Carousel>
	);
}

export default QuickSearch;
