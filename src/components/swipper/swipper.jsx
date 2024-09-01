import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./swipper.css"
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../store/reducers/todolist/todolistSlice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Swipper = () => {
  const { data, loading, error } = useSelector((store) => store.todolist);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (loading) return <div>{t('loading')}</div>;
  if (error) return <div>{t('error')}{error.message}</div>;
  if (!data || data.length === 0) return <div>{t('no_data')}</div>;

  return (
    <>
      <div className="swipper-header" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center", marginTop: "100px"}}>
        <h1 style={{fontWeight: 700, fontSize: "2.5rem", marginBottom: "0.5rem", color: "grey"}}>{t('best_business_books')}</h1>
        <p style={{fontSize: "1.1rem", color: "grey"}}>{t('business_non_fiction_literature')}</p>
      </div>
      <div style={{marginTop: "50px"}}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} swiper-pagination-bullet"></span>`;
            },
          }}
          navigation={true}
          className="mySwiper"
          spaceBetween={-20}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          loop={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card">
                <Link to={`/${item.id}`}>
                  <img src={item.img} alt={item.title} className="card-img" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Swipper;
