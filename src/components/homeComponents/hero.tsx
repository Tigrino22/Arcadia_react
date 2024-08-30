import { useEffect } from "react";
import HomeSlide from "./homeSlide";
import HomeSlideContent from './homeSlideContent';
import SliderNavigation from "./sliderNavigation";

export default function Hero(): JSX.Element {


    useEffect(() => {
        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const slides = document.querySelectorAll('.slide');

        const numberOfSlides = slides.length;
        let slideNumber = 0;

        const handleClickNext = () => {
            slides.forEach((slide) => {
                slide.classList.remove('active');
            });

            slideNumber++;

            if (slideNumber > (numberOfSlides - 1)) {
                slideNumber = 0;
            }

            slides[slideNumber].classList.add('active');
        };

        const handleClickPrev = () => {
            slides.forEach((slide) => {
                slide.classList.remove('active');
            });

            slideNumber--;

            if (slideNumber < 0) {
                slideNumber = numberOfSlides - 1;
            }

            slides[slideNumber].classList.add('active');
        };



        // Slider next button
        nextBtn?.addEventListener('click', handleClickNext);

        // Slider prev button
        prevBtn?.addEventListener('click', handleClickPrev);

        return () => {
            nextBtn?.removeEventListener('click', handleClickNext);
            prevBtn?.removeEventListener('click', handleClickPrev);
        }

    }, []);

    return (
        <>
            <section className="banner">
                <div className="slider">
                    <HomeSlide 
                        className={"active"} 
                        image={"./img/cerf_face_a_face.jpg"} 
                        titleLeft={"Arca"} 
                        titleRight={"dia"} 
                        textRight={"Nature"} >

                        <HomeSlideContent 
                        title={"01. Un zoo en immersion totale"} 
                        content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam quae facilis provident
                                    fugiat, eum aspernatur culpa suscipit ullam quis alias dolor ducimus laudantium illum hic
                                    aliquam ratione molestiae fugit.`} 
                        link={"#"} 
                        linkName={"Plus d'informations"} />

                    </HomeSlide>

                    <HomeSlide 
                        className={""} 
                        image={"./img/zebre_dans_foret.jpg"} 
                        titleLeft={"Serv"} 
                        titleRight={"ices"} 
                        textRight={"Immersion"} >

                        <HomeSlideContent 
                        title={"02. Sentez vous chez vous et comme en pleine nature"} 
                        content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quam quae facilis provident
                                    fugiat, eum aspernatur culpa suscipit ullam quis alias dolor ducimus laudantium illum hic
                                    aliquam ratione molestiae fugit.`} 
                        link={"#"} 
                        linkName={"Plus d'informations"} />

                    </HomeSlide>

                </div>

                <SliderNavigation />
                
            </section>
        </>
    );
}