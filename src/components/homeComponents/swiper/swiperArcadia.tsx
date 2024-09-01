import { Children, ReactNode, useEffect } from 'react';
import Swiper from 'swiper';
import { Keyboard, EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cube';


export default function SwiperArcadia({ children }: { children: ReactNode }): JSX.Element {

  useEffect(() => {
    // Initialiser Swiper avec l'effet Cube
    new Swiper(".mySwiper", {
      modules: [Keyboard, EffectCoverflow, Autoplay],
      keyboard: true,
      loop: true,
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: -15,
        stretch: -50,
        depth: 250,
        modifier: 2.5,
        slideShadows: true,
      },
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,

      }
    });
  }, []);

  console.log('render');


  return (
    // <!-- Swiper -->
    <div className="swiper__arcadia">
      <section className="collection">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">

            {
              Children.map(children, (child) => {
                return <>{child}</>;
              })
            }

          </div>
        </div>
      </section>
    </div>


  );
}