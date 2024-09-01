import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={1} className={styles.swiper}>
        <SwiperSlide className={styles.slide}>
          <h2>Slider 1</h2>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h2>Slider 2</h2>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h2>Slider 3</h2>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <h2>Slider 4</h2>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
