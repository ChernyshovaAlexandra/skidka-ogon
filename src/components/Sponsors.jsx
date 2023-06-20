import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productsAPI from '../utils/productsAPI';
import { Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import $ from "jquery";
import Carousel from './elements/Carousel';

import select_icon from "../assets/img/select_icon.png";
import ph2 from '../assets//img/phone2.png'
import one from '../assets//img/1-1.svg'
import two from '../assets//img/2-1.svg'
import four from '../assets//img/4-1.svg'

import s1 from '../assets/img/sponsors/sponsors-1.png';
import s2 from '../assets/img/sponsors/sponsors-2.png';
import s3 from '../assets/img/sponsors/sponsors-3.png';
import s4 from '../assets/img/sponsors/sponsors-4.png';
import s5 from '../assets/img/sponsors/sponsors-5.png';
import s6 from '../assets/img/sponsors/sponsors-6.png';
import s7 from '../assets/img/sponsors/sponsors-7.png';
import s8 from '../assets/img/sponsors/sponsors-8.png';

import ps from '../assets/img/playstore.jpg'
import gs from '../assets/img/appstore.jpg'
import qr from '../assets/img/qr.svg'



export default function Sponsors({ full }) {

	const [products, setProducts] = useState([]);
	const [userData, setUserData] = useState([]);
	const [maxLength, setMaxLength] = useState(20);
	const [regions, setRegions] = useState([]);
	const [region, setRegion] = useState('');
	const [goodsLength, setGoodsLength] = useState(16);

	useEffect(() => {
		async function fetchProducts() {
			if (full) {
				let response = await productsAPI.get("/region-products", {
					params: { project: 'skidka-ogon' }
				});
				setProducts(response.data);

				let data = response.data;

				let regionsRecieved = [];
				for (let key in data) {
					regionsRecieved.push(key);
				}
				let userData = data[regionsRecieved[0]] ? data[regionsRecieved[0]] : [];

				setUserData(userData);
				setMaxLength(userData.length);
				setRegions(regionsRecieved);
				setRegion(regionsRecieved[0]);

			} else {
				let mainResponse = await productsAPI.get("/main-page-products", {
					params: { project: 'skidka-ogon' }
				});
				setUserData(mainResponse.data.data);
			}
		}
		fetchProducts();
	}, []);

	function handleChange(e) {
		let regionNew = e.target.value;
		setUserData(products[regionNew]);
		setRegion(regionNew);
	}

	function more() {
		let top = $(".loadMore").offset().top;
		$("html,body").animate({ scrollTop: top }, "slow");
		setGoodsLength(goodsLength => goodsLength + 16);
	};



	return (
		<section className='sponsors py-20'>
			<div className='container mx-auto'>

				{!full ? <div className="additional tr mb-16 mx-auto">
					<div className="flex-col-reverse flex md:flex-row gap-0 md:gap-8 md:justify-start justify-center">

						<div className="description">
							<div className="content-inner">
								<div className="flex gap-8 items-center mb-8 ">
									<h2 className='text-orange uppercase golos text-3xl text-right'>хотите выиграть больше подарков? </h2>

								</div>
								<p className='text-right text-2xl'>Вступайте в «Клуб Друзей ДИКСИ» и присоединяйтесь к игре!</p>
								<div className="mob flex mt-4 justify-end gap-4">
									<a className='cursor-pointer' href='https://play.google.com/store/apps/details?id=com.ru.dixy' className="block">
										<img src={ps} alt="" />
									</a>
									<a className='cursor-pointer' href='https://itunes.apple.com/ru/app/id1411447398?mt=8' className="block">
										<img src={gs} alt="" />
									</a>
								</div>
								<div className='desktop flex mt-4 justify-end'>
									<img src={qr} alt='' />
								</div>
							</div>
						</div>
						<div className="phone">
							<img className='md:mx-0 mx-auto' src={ph2} alt="" />
						</div>
					</div>
				</div> : ''}

				<div className="md:flex gap-4 justify-between	items-center" id='sponsors'>
					<h2 className='text-orange uppercase golos text-3xl sponsors__title'>
						товары-спонсоры
					</h2>
					{full ? <FormControl variant="outlined">
						<InputLabel htmlFor="outlined-age-native-simple">
							Выберите регион
						</InputLabel>
						<Select
							labelId="demo-customized-select-label"
							id="demo-customized-select"
							value={region}
							onChange={(e) => handleChange(e)}
							label="Выберите регион"
							inputProps={{
								name: "Выберите регион",
								id: "outlined-age-native-simple",
							}}
						>
							{regions.map((item, index) => (
								<MenuItem value={item} key={index}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl> : ''}
				</div>
				<p className='date text-orange text-bold text-2xl mt-4'>1.11.21 - 7.11.21</p>
				<div className='grid md:grid-cols-4 grid-cols-2 mt-8 mx-auto sponsors-grid'>
					{userData.length !== 0 ? userData.slice(0, goodsLength).map((item, id) => {
						return (
							// <div className='sponsors__item' key={id}>
							// 	<div className='sponsors__item-cover w-full '>
							// 		<img src={item[0].img && item[0].img} alt={item[0].name} />
							// 	</div>
							// 	{item[0].mechanic_counts ? (
							// 		<div className='sponsors__item-count'>
							// 			<img className='count' src={item[0].mechanic_counts === 4 ? four : (item[0].mechanic_counts === 2 ? two : one)} alt='' />
							// 		</div>
							// 	) : null}
							// 	<p className='sponsors__item-name'>
							// 		{item[0].name}
							// 	</p>
							// </div>
							<Carousel key={id} data={item} marked={item.length > 1} />
						);
					}) : null}
				</div>
				<div className='grid place-items-center'>
					{!full ?
						<Link to="/skidka-ogon/sponsors">
							<button className='btn mb-8'>
								<div className='bg'></div>
								<span>смотреть все</span>
							</button>
						</Link>
						:
						goodsLength < maxLength ? (
							<button className="loadMore btn mb-8"
								onClick={(e) => more(e)}
							>
								<div className='bg'></div>
								<span>Загрузить еще</span>
							</button>
						) : null
					}
				</div>
			</div>
		</section>
	);
}
