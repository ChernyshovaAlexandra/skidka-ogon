import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
    Pagination
} from 'swiper';
import one from '../../assets/img/1-1.svg'
import two from '../../assets/img/2-1.svg'
import four from '../../assets/img/4-1.svg'
import fourHundr from '../../assets/img/400-1.svg'
// install Swiper modules
SwiperCore.use([Pagination]);



export default function Carousel({ data, marked }) {
    return (
        <div className='sponsors__item ' >
            <Swiper
            spaceBetween={50}
            pagination={{
                "dynamicBullets": true
            }} className="mySwiper p-16">
                {data.map(
                    (item, id) => (
                            <SwiperSlide key={id}>
                                <div className='sponsors__item-cover w-full '>
                                    <img src={item.img && item.img} alt={item.name} />
                                </div>
                                {item.mechanic_counts ? (
                                    <div className='sponsors__item-count'>
                                        <img className='count' src={item.mechanic_counts === 4 ? four : (item.mechanic_counts === 2 ? two :
                                          (item.mechanic_counts === 400 ? fourHundr : one))} alt='' />
                                    </div>
                                ) : null}
                                <p className='sponsors__item-name'>
                                    {item.name}<br />
                                    {marked && id === 0 ? 'В АССОРТИМЕНТЕ' : ''}
                                </p>
                            </SwiperSlide>
                    )
                )}

            </Swiper>

        </div>

    )
}
