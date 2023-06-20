import React, { useEffect } from 'react'
import Header from './elements/Header'
import MainBg from './elements/MainBg'
import FireWhite from './elements/FireWhite'
import kupon from '../assets/img/two-kupons.png'
import { sparks } from './elements/sparks'

export default function Main() {
  useEffect(() => {
    sparks()
  }, [])
  return (
    <section className="main py-20 bg-black text-white">
      <div className="sparkles"></div>

      <div className='container mx-auto grid'>
        <div className="main__content relative kup">
          <Header />
          <h2 className='text-orange text-bold text-center mt-4 mb-8 uppercase text-xl md:text-3xl lg:text-5xl'>- 10% на весь чек</h2>
        </div>
        <div className="main_img lg:flex lg:gap-16 justify-center max-w-screen-lg lg:max-w-screen-xl leading-relaxed m-auto ubuntu mt-8  md:text-xl lg:text-2xl">
          <div className="block flex-1 gradient mb-8 lg:mb-0">
            <a href='#sponsors'><div className="flex items-center gap-4">
              <div className="icon">
                <svg viewBox="0 0 71 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d)">
                    <path d="M48.892 62H22.151C19.8352 62 18 60.1131 18 57.8312V14.1688C18 11.8869 19.8789 10 22.151 10H48.8483C51.1641 10 52.9993 11.8869 52.9993 14.1688V57.8312C53.0429 60.1131 51.1641 62 48.892 62ZM22.151 12.1941C21.0586 12.1941 20.1847 13.0717 20.1847 14.1688V57.8312C20.1847 58.9283 21.0586 59.8498 22.1947 59.8498H48.892C49.9843 59.8498 50.9019 58.9722 50.9019 57.8312V14.1688C50.9019 13.0717 50.028 12.1502 48.892 12.1502H22.151V12.1941Z" fill="#FF8200" />
                    <path d="M34.298 28.957C34.298 29.9663 34.0796 30.8878 33.6426 31.8093C33.2057 32.7309 32.5502 33.4768 31.6764 34.0034C30.8025 34.5739 29.7975 34.8372 28.6177 34.8372C27.438 34.8372 26.3893 34.53 25.4717 33.9595C24.5542 33.3891 23.8987 32.5992 23.4181 31.6777C23.1996 31.195 23.0249 30.7123 22.8938 30.2296C22.7627 29.7469 22.719 29.2203 22.719 28.6937C22.719 27.7283 22.9375 26.8507 23.3307 26.0169C23.724 25.1832 24.3794 24.5249 25.2533 23.9545C25.6902 23.6912 26.1709 23.4718 26.6952 23.3401C27.2195 23.2085 27.7876 23.1207 28.3556 23.1207C29.011 23.1207 29.579 23.2085 30.1034 23.3401C30.6277 23.4718 31.152 23.6912 31.589 23.9984C32.4629 24.5249 33.1183 25.2709 33.5552 26.1486C34.0796 27.0262 34.298 27.9477 34.298 28.957ZM30.4966 28.957C30.4966 28.4304 30.3218 27.9916 29.9723 27.5967C29.7975 27.3773 29.579 27.2017 29.3169 27.114C29.0547 26.9823 28.7925 26.9384 28.443 26.9384C28.1371 26.9384 27.8749 26.9823 27.6565 27.114C27.438 27.2456 27.2195 27.3773 27.001 27.5967C26.6515 27.9916 26.4767 28.4743 26.4767 29.0009C26.4767 29.5275 26.6515 30.0102 27.001 30.449C27.3506 30.8439 27.8312 31.0633 28.3993 31.0633C29.011 31.0633 29.5353 30.8439 29.8849 30.4051C30.2781 30.0102 30.4966 29.5275 30.4966 28.957Z" fill="#FF8200" />
                    <path d="M48.2365 42.9553C48.2365 43.9646 48.018 44.8861 47.5811 45.8076C47.1441 46.7291 46.4887 47.4751 45.6148 48.0017C44.7409 48.5722 43.736 48.8355 42.5562 48.8355C41.3765 48.8355 40.3278 48.5283 39.4102 47.9578C38.4926 47.3874 37.8372 46.5975 37.3566 45.676C37.1381 45.1933 36.9633 44.7106 36.8322 44.2279C36.7012 43.7452 36.6575 43.2186 36.6575 42.692C36.6575 41.7266 36.8759 40.849 37.2692 40.0152C37.6624 39.1815 38.3179 38.5232 39.1917 37.9528C39.6287 37.6895 40.1093 37.4701 40.6337 37.3384C41.158 37.2068 41.726 37.119 42.2941 37.119C42.9495 37.119 43.5175 37.2068 44.0418 37.3384C44.5662 37.4701 45.0905 37.6895 45.5274 37.9967C46.4013 38.5232 47.0567 39.2692 47.4937 40.1469C48.018 41.0245 48.2365 41.946 48.2365 42.9553ZM44.3914 42.9553C44.3914 42.4287 44.2166 41.9899 43.8671 41.595C43.6923 41.3756 43.4738 41.2 43.2116 41.1123C42.9495 40.9806 42.6873 40.9367 42.3377 40.9367C42.0319 40.9367 41.7697 40.9806 41.5512 41.1123C41.3328 41.2439 41.1143 41.3756 40.8958 41.595C40.5463 41.9899 40.3715 42.4726 40.3715 42.9992C40.3715 43.5258 40.5463 44.0085 40.8958 44.4473C41.2454 44.8422 41.726 45.0616 42.2941 45.0616C42.9058 45.0616 43.4301 44.8422 43.7797 44.4034C44.2166 44.0085 44.3914 43.4819 44.3914 42.9553Z" fill="#FF8200" />
                    <path d="M27.9625 48.9232C27.5693 48.9232 27.1324 48.7916 26.7828 48.5283C25.8215 47.8701 25.603 46.5536 26.2585 45.5882L41.333 23.9106C41.9885 22.9452 43.2993 22.7257 44.2606 23.384C45.2219 24.0422 45.4403 25.3587 44.7849 26.3241L29.6666 48.0456C29.2734 48.616 28.618 48.9232 27.9625 48.9232Z" fill="#FF8200" />
                  </g>
                  <defs>
                    <filter id="filter0_d" x="0" y="0" width="71" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="8" />
                      <feGaussianBlur stdDeviation="9" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.494118 0 0 0 0 0.0705882 0 0 0 0.67 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <p>Получайте купон на скидку 10% за покупку от 1000 рублей или за покупку товаров-спонсоров</p>
            </div></a>
          </div>
          <div className="block flex-1 gradient">
            <a href='#prizes'><div className="flex  items-center gap-4">
              <div className="icon">
                <svg viewBox="0 0 88 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d)">
                    <path d="M70 24.0306C70 23.0354 69.5094 22.0402 68.5283 21.5426C68.0377 21.2938 67.5472 21.045 66.8113 21.045C62.3962 21.045 57.9811 21.045 53.566 21.045H53.3208C54.0566 20.5474 54.7924 20.2986 55.5283 19.801C56.5094 19.0545 57.2453 18.3081 57.9811 17.3129C58.717 16.0689 58.4717 13.8297 57.7358 12.8344C57 11.8392 56.2641 11.0928 55.0377 10.5952C54.3019 10.3464 53.3208 10.0976 52.0943 10.0976C50.6226 10.3464 49.3962 10.844 48.4151 11.8392C46.6981 13.3321 45.4717 15.0737 44.4906 17.0641C44.4906 17.3129 44.2453 17.5617 44 17.8105C43.7547 17.5617 43.7547 17.3129 43.7547 17.3129C43.2642 16.0689 42.283 14.8249 41.5472 13.8297C40.3208 12.3368 39.3396 11.3416 37.8679 10.5952C36.6415 10.0976 35.6604 9.8488 34.434 10.0976C32.717 10.5952 31.2453 11.5904 30.2642 12.8344C29.5283 13.8297 29.283 14.8249 29.283 15.8201C29.283 16.5665 29.7736 17.3129 30.2642 17.8105C31 18.8057 31.9811 19.5522 32.9623 20.0498C33.4528 20.2986 33.9434 20.5474 34.434 20.7962H34.1887C29.7736 20.7962 25.3585 20.7962 20.9434 20.7962C20.4528 20.7962 20.2075 20.7962 19.717 21.045C18.7358 22.0402 18 22.7866 18 24.2794C18 27.0163 18 30.0019 18 32.7388C18 33.2364 18.2453 33.9828 18.4906 34.2316C18.7358 34.7292 19.2264 34.978 19.717 35.2268C20.2075 35.4756 20.2075 35.7244 20.2075 36.222C20.2075 37.9636 20.2075 39.9541 20.2075 41.6957C20.2075 47.4182 20.2075 53.1407 20.4528 59.112C20.4528 60.1072 20.9434 60.8536 21.434 61.3512C21.9245 61.8488 22.6604 62.0976 23.3962 62.0976C37.1321 62.0976 50.6226 62.0976 64.3585 62.0976C64.8491 62.0976 65.3396 62.0976 65.8302 61.8488C66.8113 61.3512 67.5472 60.356 67.5472 59.112C67.5472 57.8679 67.5472 56.6239 67.5472 55.1311C67.5472 48.911 67.5472 42.4421 67.5472 36.222C67.5472 35.7244 67.5472 35.4756 68.0377 35.2268C68.0377 35.2268 68.283 35.2268 68.283 34.978C69.0189 34.4804 69.7547 33.734 69.7547 32.49C70 29.7531 70 27.0163 70 24.0306ZM45.9623 19.5522C46.6981 17.5617 47.9245 15.8201 49.3962 14.3273C49.8868 13.8297 50.3774 13.5809 50.8679 13.0833C51.8491 12.3368 53.0755 12.5856 54.3019 13.0833C55.0377 13.3321 55.5283 13.8297 56.0189 14.5761C56.5094 15.0737 56.5094 15.5713 56.0189 16.3177C55.7736 16.8153 55.283 17.3129 54.7924 17.5617C53.3208 18.5569 51.8491 19.3033 50.1321 19.801C48.9057 20.2986 47.6792 20.5474 46.4528 20.7962C46.2075 20.7962 46.2075 20.7962 45.9623 20.7962H45.717C45.717 20.5474 45.717 20.0498 45.9623 19.5522ZM34.1887 18.0593C33.4528 17.5617 32.717 17.0641 32.2264 16.3177C31.4906 15.5713 31.4906 15.0737 32.2264 14.3273C32.4717 14.0785 32.717 13.8297 32.9623 13.5809C34.434 12.3368 36.3962 12.5856 37.3774 13.3321C38.3585 13.8297 38.8491 14.5761 39.5849 15.3225C40.8113 17.0641 41.7925 18.8057 42.5283 20.7962C42.5283 20.7962 42.5283 20.7962 42.5283 21.045C42.0377 21.045 41.5472 20.7962 41.3019 20.7962C38.6038 20.0498 36.3962 19.3033 34.1887 18.0593ZM42.7736 59.3608H42.5283C36.6415 59.3608 31 59.3608 25.1132 59.3608C24.6226 59.3608 23.8868 59.3608 23.3962 59.3608C23.1509 59.3608 23.1509 59.3608 23.1509 59.112C23.1509 58.6144 23.1509 58.1167 23.1509 57.6191C23.1509 53.8871 23.1509 50.4038 23.1509 46.6718C23.1509 43.1885 23.1509 39.4565 23.1509 35.9732V35.7244C29.7736 35.7244 36.3962 35.7244 43.0189 35.7244C42.7736 43.6861 42.7736 51.399 42.7736 59.3608ZM65.0943 57.1215C65.0943 57.8679 65.0943 58.3656 65.0943 59.112C65.0943 59.3608 65.0943 59.3608 64.8491 59.3608C64.3585 59.3608 63.6226 59.3608 63.1321 59.3608C57.2453 59.3608 51.6038 59.3608 45.717 59.3608H45.4717C45.4717 51.399 45.4717 43.4373 45.4717 35.4756C52.0943 35.4756 58.717 35.4756 65.3396 35.4756V35.7244C65.0943 42.9397 65.0943 49.9062 65.0943 57.1215ZM67.5472 31.2459C67.5472 31.7435 67.5472 32.2411 67.5472 32.7388C67.5472 32.9876 67.5472 32.9876 67.3019 32.9876C66.8113 32.9876 66.3208 32.9876 65.8302 32.9876C59.2075 32.9876 28.5472 32.9876 21.434 32.9876C20.6981 32.9876 20.4528 32.7388 20.4528 32.49C20.4528 32.2411 20.4528 31.7435 20.4528 31.4947C20.4528 29.2555 20.4528 27.0163 20.4528 24.777C20.4528 24.5282 20.4528 24.2794 20.4528 24.2794C20.4528 24.0306 20.6981 23.7818 20.9434 23.7818C22.4151 23.7818 23.6415 23.7818 25.1132 23.7818C31 23.7818 58.2264 23.7818 64.6038 23.7818C65.3396 23.7818 66.3208 23.7818 67.0566 23.7818C67.3019 23.7818 67.5472 23.7818 67.5472 24.2794C67.5472 24.777 67.5472 25.2746 67.5472 25.7722C67.5472 27.5139 67.5472 29.2555 67.5472 31.2459Z" fill="#FF8200" />
                  </g>
                  <defs>
                    <filter id="filter0_d" x="0" y="0" width="88" height="88.0976" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="8" />
                      <feGaussianBlur stdDeviation="9" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.494118 0 0 0 0 0.0705882 0 0 0 0.67 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <p>Участвуйте в розыгрыше ценных призов</p>
            </div></a>

          </div>
        </div>
        <p className='text-orange text-center text-xl mt-8'>С 11 октября до 7 ноября</p>
      </div>
      <MainBg />
      <div className='main-gradient'>
        <div className="container mx-auto">
          <div className="flex justify-center text items-center mb-16 gap-8 z-30 relative flex-col lg:flex-row" >
            <div className='flex-col text-white md:text-2xl lg:text-3xl font-medium'>
              <div className="flex-none md:flex-1 max-w-full mb-5">
                <div className="flex gap-4 items-center">
                  <div className="icon">
                    <FireWhite />
                  </div>
                  <p>
                    Совершите покупку от 1000&#160;рублей после применения всех скидок
                  </p>
                </div>
              </div>
              <div className="flex-none md:flex-1 max-w-full mb-5">
                <div className="flex gap-4 items-center">
                  <div className="icon">
                    <FireWhite />
                  </div>
                  <p>
                    Получите на кассе купон на скидку -10%
                  </p>
                </div>
              </div>
              <div className="flex-none md:flex-1 max-w-full mb-5">
                <div className="flex gap-4 items-center">
                  <div className="icon">
                    <FireWhite />
                  </div>
                  <p>
                    Используйте при следующей покупке от 1000 рублей
                  </p>
                </div>
              </div>
              <div className="flex-none md:flex-1 max-w-full">
                <div className="flex gap-4 items-center">
                  <div className="icon">
                    <FireWhite />
                  </div>
                  <p>
                    Получайте дополнительные купоны за покупку товаров-спонсоров
                  </p>
                </div>
              </div>

            </div>
            <img src={kupon} alt="" className='sm:w-auto w-full' />
          </div>
        </div>
      </div>
    </section>
  )
}