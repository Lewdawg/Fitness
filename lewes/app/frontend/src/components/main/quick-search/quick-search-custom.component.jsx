import './quick-search-custom.styles.css';

import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function QuickSearchCustom({
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

	return (
		<div id="quick-search" class="carousel">
			<ol class="carousel-indicators">
				<li>location</li>
				<li class="active">duration</li>
				<li>difficulty</li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item">
					<div class="wrapper d-flex justify-content-center align-items-center">
						<button type="button" class="fs-4 p-5 m-5 btn btn-primary active">
							Indoor
						</button>
						<button type="button" class="fs-4 p-5 m-5 btn btn-primary">
							Outdoor
						</button>
					</div>
				</div>
				<div class="active carousel-item">
					<div class="wrapper d-flex justify-content-center align-items-center">
						<button type="button" class="fs-4 p-5 m-5 btn btn-primary">
							15 Minutes
						</button>
						<button type="button" class="fs-4 p-5 m-5 btn btn-primary">
							30 Minutes
						</button>
						<button type="button" class="fs-4 p-5 m-5 btn btn-primary">
							45 Minutes
						</button>
					</div>
				</div>
				<div class="carousel-item">
					<div class="wrapper d-flex justify-content-center align-items-center">
						<button type="button" class="fs-4 p-5 m-5 btn btn-primary">
							Easy
						</button>
						<button type="button" class="fs-4 p-5 m-5 btn btn-primary">
							Medium
						</button>
						<button type="button" class="fs-4 p-5 m-5 btn btn-primary">
							Hard
						</button>
						<button
							id="search-btn"
							type="button"
							class="fs-4 p-5 m-5 btn btn-primary"
						>
							Show Workouts
						</button>
					</div>
				</div>
			</div>
			<a class="carousel-control-prev" href="#">
				<span aria-hidden="true" class="carousel-control-prev-icon"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#">
				<span aria-hidden="true" class="carousel-control-next-icon"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	);
}

export default QuickSearchCustom;
