import React, { useEffect, useState } from "react";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.scss";
import { useDispatch, useSelector } from "react-redux";
import { actGetBrand } from "./module/action";
import { FreeMode, Navigation } from "swiper";

export default function () {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { brandList } = useSelector((state) => state.brandReducer);
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      dispatch(actGetBrand());
      setLoading(false);
    }, 1000);
    

    return () => clearTimeout(timing);
  }, []);
  const renderHotBrand = () => {
    return brandList?.map((item, index) =>(<SwiperSlide key={index}>
      <div className="swiper-slide">
        <div className="brandLogo ">
          <img src={item.image} className="img-fluid" />
        </div>
      </div>
    </SwiperSlide>))
    }
  return (
    <div>
      <section className="banner">
        <div className="row">
          <div className="col-9">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="swipperBorder"
            >
              <SwiperSlide>
                <div className="swiper-slide slide">
                  <div className="image ">
                    <img src={banner1} alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide slide">
                  <div className="image ">
                    <img src={banner2} alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide slide">
                  <div className="image ">
                    <img src={banner3} alt />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-3">
            <div className="contentRight">
              <div className="block-item ">
                <h3>Mi???n ph?? v???n chuy???n</h3>
                <p>
                  100% ????n h??ng ?????u ???????c mi???n ph?? v???n chuy???n khi thanh to??n
                  tr?????c.
                </p>
              </div>
              <div className="block-item ">
                <h3>B???o h??nh t???n t??m</h3>
                <p>
                  B???t k??? gi???y t??? th??? n??o, ThinkPro lu??n cam k???t s??? h??? tr??? kh??ch
                  h??ng t???i c??ng.
                </p>
              </div>
              <div className="block-item ">
                <h3>?????i tr??? 1-1 ho???c ho??n ti???n</h3>
                <p>
                  N???u ph??t sinh l???i ho???c b???n c???m th???y s???n ph???m ch??a ????p ???ng ???????c
                  nhu c???u.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hotBrand">
          <h1 className="text-left">Th????ng hi???u n???i b???t</h1>
          <Swiper
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        grabCursor={true}
        navigation
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation,]}
        className="mySwiper"
      >
          {renderHotBrand()}
        </Swiper>
      </section>
    </div>
  );
}
