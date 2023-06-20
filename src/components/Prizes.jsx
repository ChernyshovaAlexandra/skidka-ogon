import React from 'react'
import p1 from '../assets/img/prizes/1-new.png'
import p2 from '../assets/img/prizes/200.png'
import p3 from '../assets/img/prizes/300.png'
import p4 from '../assets/img/prizes/1000.png'
import p5 from '../assets/img/prizes/5.png'
import p6 from '../assets/img/prizes/6.png'

const prizesMass = [
    {
        name: 'Сертификат на путешествие',
        img: p1
    },
    {
        name: `Купон номиналом 200&#160;руб. на скидку в Дикси`,
        img: p2
    },
    {
        name: `Купон номиналом 300&#160;руб. на скидку в Дикси`,
        img: p3
    },
    {
        name: `Купон номиналом 1000&#160;руб. на скидку в Дикси`,
        img: p4
    },

]



export default function Prizes() {
    return (
        <section className="prizes py-20" id='prizes'>
            <div className='container  mx-auto '>
                <h2 className='text-white text-center uppercase golos text-5xl'>Призы</h2>
                <div className="grid mt-16 lg:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-8 prizes-grid mx-auto">
                    {prizesMass.map(
                        (item, id) => (
                            <div className='prize-item' key={id}>
                                <div className="prize-image">
                                    <img src={item.img} alt="" />
                                </div>
                                <h4 className='text text-center text-white mt-4 mx-auto'
                                    dangerouslySetInnerHTML={{ __html: item.name }}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}
