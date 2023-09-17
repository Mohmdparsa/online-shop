import styles from "./SwiperSlider.module.css"
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperSlider = () => {
    return (
      <div>
        <div className={styles.swiperSliderMain}>
          <div className={styles.arrowBox}>
            <div className={styles.swiperTitleDiv}>
              <h2 className={styles.swiperTitle}>Amazing Offers</h2>
              <div className={styles.rightArrow}></div>
            </div>
          </div>
          
  
          <div className={styles.swiperSlider}>
          <Swiper
      modules={[Navigation, Pagination, Scrollbar ]}
      className={styles.swiper}
      spaceBetween={1}
      slidesPerView={3.9}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => {
        console.log("slide change");
      }}
      onSwiper={console.log(Swiper)}
    >
      <SwiperSlide>      <div className={styles.swiperBox}>
            <div className={styles.swiperImg}><img src="" alt="" /></div>
            <span className={styles.swiperBoxCost}>22$</span>
          </div></SwiperSlide>
      <SwiperSlide> <div className={styles.swiperBox}>
            <div className={styles.swiperImg}><img src="" alt="" /></div>
            <span className={styles.swiperBoxCost}>22$</span>
          </div></SwiperSlide>
      <SwiperSlide> <div className={styles.swiperBox}>
            <div className={styles.swiperImg}><img src="" alt="" /></div>
            <span className={styles.swiperBoxCost}>22$</span>
          </div></SwiperSlide>
      <SwiperSlide> <div className={styles.swiperBox}>
            <div className={styles.swiperImg}><img src="" alt="" /></div>
            <span className={styles.swiperBoxCost}>22$</span>
          </div></SwiperSlide>
          <SwiperSlide> <div className={styles.swiperBox}>
            <div className={styles.swiperImg}><img src="" alt="" /></div>
            <span className={styles.swiperBoxCost}>22$</span>
          </div></SwiperSlide>
     </Swiper>
         
          </div>
  
        </div>
      </div>
    );
  };
  
  export default SwiperSlider;