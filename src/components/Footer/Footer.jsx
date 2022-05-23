import React from "react";

import imageFooter from "../../assets/images/imageFooter.png";
import shieldCheckIcon from "../../assets/images/shieldCheckIcon.png";
import repeatIcon from "../../assets/images/repeatIcon.png";
import infoIcon from "../../assets/images/infoIcon.png";
import fb from "../../assets/images/fb.png";
import youtube from "../../assets/images/youtube.png";
import tiktok from "../../assets/images/tiktok.png";
import instagram from "../../assets/images/instagram.png";
import chungnhan from "../../assets/images/chungnhan.png";
import footerImg1 from "../../assets/images/footerImg1.png";
import footerImg2 from "../../assets/images/footerImg2.png";
import footerImg3 from "../../assets/images/footerImg3.png";
import footerImg4 from "../../assets/images/footerImg4.png";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FiPhone, FiCheckSquare } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsMap, BsClipboard } from "react-icons/bs";
import { BiPackage } from "react-icons/bi";
import { MdOutlineWavingHand } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="row footer__content">
          <div className="col-8 ">
            <div className="footer__left">
              <h3>Tự tin mua sắm cùng ThinkPro</h3>
              <div className="row">
                <div className="col-6">
                  <img src={shieldCheckIcon} alt="" />
                  <h4>Chế độ bảo hành tận tâm</h4>

                  <p>
                    Tất cả các sản phẩm do ThinkPro bán ra đều được tuân thủ
                    điều kiện bảo hành của nhà cung cấp, hãng sản xuất. Nếu có
                    vấn đề về chất lượng sản phẩm, ThinkPro xin cam kết sẽ hỗ
                    trợ Quý khách tới cùng.
                  </p>
                  <span>
                    Chi tiết <Icon icon={faArrowRight} className="ml-3" />
                  </span>
                </div>
                <div className="col-6">
                  <img src={repeatIcon} alt="" />
                  <h4>Hỗ trợ đổi trả 1-1 hoặc hoàn tiền 100%</h4>
                  <p>
                    Với thời gian dùng thử lên tới 15 ngày, Quý khách sẽ được hỗ
                    trợ đổi trả 1-1 hoặc hoàn tiền 100% nếu phát sinh lỗi hoặc
                    cảm thấy sản phẩm chưa đáp ứng được nhu cầu.
                  </p>
                  <span>
                    Chi tiết <Icon icon={faArrowRight} className="ml-3" />
                  </span>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <div className="usefulInfo">
                <img src={infoIcon} alt="" />
                <h4>Thông tin hữu ích</h4>
                <div className="row">
                  <div className="col-6">
                    <button className="btn ">
                      <FiPhone className="usefulIcon" /> Hotline: 1900.12.3456
                    </button>
                    <button className="btn ">
                      <RiFacebookCircleLine className="usefulIcon" /> Group trao
                      đổi và hỗ trợ
                    </button>
                    <button className="btn ">
                      <BsMap className="usefulIcon" /> Hệ thống cửa hàng
                    </button>
                  </div>
                  <div className="col-6">
                    <button className="btn ">
                      <BiPackage className="usefulIcon" /> Vận chuyển thanh toán
                    </button>
                    <button className="btn ">
                      <FiCheckSquare className="usefulIcon" /> Tra cứu bảo hành
                    </button>
                    <button className="btn ">
                      <BsClipboard className="usefulIcon" /> Bảng giá dịch vụ
                    </button>
                  </div>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <div className="socialNetwork">
                <MdOutlineWavingHand className="wavingIcon" />
                <h4>LaptopPro trên social networks</h4>
                <ul>
                  <li>
                    <button>
                      <img src={fb} alt="" /> <span>Facebook</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <img src={youtube} alt="" className="youtube" />
                      <span>Youtube</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <img src={tiktok} alt="" />
                      <span>Tiktok</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <img src={instagram} alt="" />
                      <span>Instagram</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4 footer__right">
            <img src={imageFooter} alt="" className="img-fluid" />
          </div>
        </div>
      </footer>
      <section className="footer2">
        <div className="row footer2__content">
          <div className="col-6 ">
            <div className="footer2__left">
              <h3>
                laptop
                <span>Pro</span>
              </h3>
              <p>Chân thành phục vụ từ 2013</p>
              <div className="row">
                <div className="col-4">
                  <button className="btn ">Về chúng tôi</button>
                  <button className="btn ">Tin tức</button>
                </div>
                <div className="col-4">
                  <button className="btn ">Vì khách hàng</button>
                  <button className="btn ">Khuyến mại</button>
                </div>
                <div className="col-4">
                  <button className="btn ">Đội ngũ</button>
                  <button className="btn ">
                    <img src={chungnhan} className="img-fluid" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="footer2__right">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={footerImg1} alt="" className="img-fluid"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={footerImg2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={footerImg3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={footerImg4} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
