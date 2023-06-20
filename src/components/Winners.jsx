import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/components/pagination/pagination.scss';

import Slider from "react-slick";

export default function Winners({ winners }) {

	const [tabs, setTabs] = useState([])
	let [active, setActiveTab] = useState(0)
	let newWinners = winners
	useEffect(() => {
		setTabs(Object.keys(winners))
		if (newWinners['10 ноября'].indexOf({
			name: 'Елена П.',
			phone: '2353',
			special: true
		}) === -1) {
			newWinners['10 ноября'].unshift(
				{
					name: 'Елена П.',
					phone: '2353',
					special: true
				}
			)
		}
	}, [])

	var settings = {
		rows: 6,
		dots: true,
		arrows: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	};

	console.log(winners)
	return (
		<section className='winners md:py-20' id='winners'>
			<div className="container mx-auto max-w-full md-max-w-95_per">
				<div className="gradient-block">
					<div className="content md:px-4 lg:px-16 md:pb-16">
						<h2 className='pt-8 mb-8 text-white text-center uppercase golos text-5xl'>Победители</h2>
						<div className="mt-32 slider-block mx-auto">
							<div className="content-inner p-8">
								<div className="tabs flex justify-center flex-wrap xl:flex-nowrap ">
									{tabs.length ?
										tabs.map(
											(tab, id) => (
												<div className={`${active === id ? 'active' : ''} tab xl:mb-0 mb-4`} key={id}
													onClick={() => { active === id ? false : setActiveTab(id) }}
												>
													<div className="btn">
														<div className="bg"></div>
														<span>
															{tab}
														</span>
													</div></div>
											)
										) : null}
								</div>
								<div className="slider mt-16 mb-4">
									{newWinners[tabs[active]] && winners[tabs[active]].length ?
										<Slider {...settings}>
											{newWinners[tabs[active]].map((winner, id) => (
												<p
													className={`${winner.special ? 'special' : ''} winner mb-8`}
													key={id}>
													<span className='text-bold mr-4'>
														{winner.name}
													</span>
													+7***{winner.phone}
												</p>

											))}
										</Slider>
										:
										<p>Скоро будут опубликованы</p>
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
