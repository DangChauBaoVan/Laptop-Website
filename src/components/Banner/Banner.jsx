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
                <h3>Miễn phí vận chuyển</h3>
                <p>
                  100% đơn hàng đều được miễn phí vận chuyển khi thanh toán
                  trước.
                </p>
              </div>
              <div className="block-item ">
                <h3>Bảo hành tận tâm</h3>
                <p>
                  Bất kể giấy tờ thế nào, ThinkPro luôn cam kết sẽ hỗ trợ khách
                  hàng tới cùng.
                </p>
              </div>
              <div className="block-item ">
                <h3>Đổi trả 1-1 hoặc hoàn tiền</h3>
                <p>
                  Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được
                  nhu cầu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hotBrand">
          <h1 className="text-left">Thương hiệu nổi bật</h1>
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
