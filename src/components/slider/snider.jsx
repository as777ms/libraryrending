import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSlider } from '../../store/reducers/todoSlider/sliderSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css'; // Optional: Add custom styles
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Slider = () => {

  const { t } = useTranslation(); // Get the translation function
  const { items } = useSelector((store) => store.todoSlider);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSlider());
  }, [dispatch]);

  return (
    <div className="slider-container">
      <div className="text-container">
        <h1 className="slider-title">
          <span className="title-highlight">{t('onlyFromAudible')}</span>
        </h1>
        <p className="slider-description">
          {t('groundbreakingOriginals')} <span className="description-highlight">from A-list celebs and emerging talent.</span>
        </p>
      </div>
      <div className="swiper-container">
        <Swiper
          slidesPerView={1} // Adjust for mobile view
          spaceBetween={20}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          className="swiper-wrapper"
          breakpoints={{
            // When window width is >= 600px (tablet)
            600: {
              slidesPerView: 2, // Adjust for tablet view
            },
            // When window width is >= 768px (small desktop)
            768: {
              slidesPerView: 3, // Adjust for small desktop view
            },
            // When window width is >= 1024px (large desktop)
            1024: {
              slidesPerView: 4, // Adjust for large desktop view
            }
          }}
        >
          {items.map((el) => (
            <SwiperSlide key={el.id} className="swiper-slide">
              <Link to={`/slider/${el.id}`}>
                <img src={el.img} alt={el.alt || ''} className="slider-image" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;