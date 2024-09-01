import SwiperArcadia from "./swiper/swiperArcadia";
import SwiperSlide from "./swiper/swiperSlide";



export default function HomeSwiper(): JSX.Element {
  return (
    // <!-- Swiper -->

    <SwiperArcadia>

      <SwiperSlide
        title={"Animal #1"}
        imageSource={"./img/natureArbre1.jpg"}
        textContent={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam veniam vitae reprehenderit totam
              necessitatibus dignissimos quae modi vel deserunt.`}
        textButton={"Rencontre-moi"} />

      <SwiperSlide
        title={"Animal #2"}
        imageSource={"./img/natureArbre1.jpg"}
        textContent={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam veniam vitae reprehenderit totam
              necessitatibus dignissimos quae modi vel deserunt.`}
        textButton={"Rencontre-moi"} />

      <SwiperSlide
        title={"Animal #3"}
        imageSource={"./img/natureArbre1.jpg"}
        textContent={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam veniam vitae reprehenderit totam
              necessitatibus dignissimos quae modi vel deserunt.`}
        textButton={"Rencontre-moi"} />

      <SwiperSlide
        title={"Animal #4"}
        imageSource={"./img/natureArbre1.jpg"}
        textContent={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam veniam vitae reprehenderit totam
              necessitatibus dignissimos quae modi vel deserunt.`}
        textButton={"Rencontre-moi"} />

      <SwiperSlide
        title={"Animal #5"}
        imageSource={"./img/natureArbre1.jpg"}
        textContent={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam veniam vitae reprehenderit totam
              necessitatibus dignissimos quae modi vel deserunt.`}
        textButton={"Rencontre-moi"} />

    </SwiperArcadia>
  );
}