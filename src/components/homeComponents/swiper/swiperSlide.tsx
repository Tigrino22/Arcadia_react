type SwiperSlideType = {
  title: string;
  imageSource: string;
  textContent: string;
  textButton: string;
}

export default function SwiperSlide({title, imageSource, textContent, textButton}: SwiperSlideType): JSX.Element {

    return (
        <div className="content swiper-slide">
        <img src={imageSource} alt=""/>
        <div className="text-content">
          <h3>{title}</h3>
          <p>{textContent}</p>
          <button>{textButton}</button>
        </div>
      </div>
    );

}