import Header from "components/Header/Header";
import React, { useState, useEffect, useReducer } from "react";
import "./ProductDetail.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBookmark,
  faBoltLightning,
  faCameraAlt,
  faInfoCircle,
  faHeadset,
  faPlus,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { actGetProductById } from "./module/action";
import { useParams } from "react-router-dom";

import icon2 from "../../../assets/images/icon1.png";
import cpuIcon from "../../../assets/images/cpuIcon.png";
import ramIcon from "../../../assets/images/ramIcon.png";
import monitorIcon from "../../../assets/images/monitorIcon.png";
import gpuIcon from "../../../assets/images/gpuIcon.png";
import stackIcon from "../../../assets/images/stackIcon.png";
import batteryIcon from "../../../assets/images/batteryIcon.png";
import connectIcon from "../../../assets/images/connectIcon.png";
import harddiskIcon from "../../../assets/images/harddiskIcon.png";
import shieldCheckIcon from "../../../assets/images/shieldCheckIcon.png";
import truckIcon from "../../../assets/images/truckIcon.png";
import clipboardIcon from "../../../assets/images/clipboardIcon.png";
import chatIcon from "../../../assets/images/chatIcon.png";
import human from "../../../assets/images/human.png";

import { Radar } from "react-chartjs-2";
import { actAddToCart } from "../Cart/module/action";
// ChartJS.register(
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend
// );
// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false,
//     },
//     tooltips: { showTooltips: false },
//   },
//   tooltips: { enabled: false },
//   hover: { mode: null },

//   scales: {
//     r: {
//       ticks: {
//         display: false,
//         scaleSteps: 1,
//         min: 1,
//         max: 6,
//         stepSize: 1,
//       },
//       pointLabels: {
//         font: {
//           size: 18,
//         },
//       },
//     },
//   },
// };
// export const data = {
//   labels: [
//     "Văn Phòng, học tập",
//     "2D Design",
//     "Quay dựng Video",
//     "3D design",
//     "Gaming",
//     "Lập trình",
//   ],
//   datasets: [
//     {
//       data: [6, 3, 2, 2, 3, 4],
//       backgroundColor: "rgba(118, 232, 204, 0.234)",
//       borderColor: "rgba(118, 232, 204, 0.234)",
//       borderWidth: 1,
//       pointBackgroundColor: "#1BCBA1",
//     },
//   ],
// };
export const options = {
  tooltips: { enabled: false },
  hover: { mode: null },
  legend: {
    display: false,
  },
  scale: {
    ticks: {
      display: false,
      min: 1,
      max: 6,
      stepSize: 1,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)",
    },
    pointLabels: {
      fontSize: 18,
    },
  },
};
const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  const { productID } = useParams();
  const [loading, setLoading] = useState(false);

  

  const { productInfo } = useSelector((state) => state.productInfoReducer);
  const { cart,quantity } = useSelector((state) => state.cartReducer);
  
  const {studying,twod_design,making_video,threed_design,gaming,programming} = productInfo[0]?.characteristic;

  const data2 = [studying,twod_design,making_video,threed_design,gaming,programming];
  const data = {
    labels: [
      "Văn Phòng, học tập",
      "2D Design",
      "Quay dựng Video",
      "3D design",
      "Gaming",
      "Lập trình",
    ],
    datasets: [
      {
        data: data2,
        backgroundColor: "rgba(118, 232, 204, 0.234)",
        borderColor: "rgba(118, 232, 204, 0.234)",
        borderWidth: 1,
        pointBackgroundColor: "#1BCBA1",
      },
    ],
  };

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0)
    const timing = setTimeout(() => {
      dispatch(actGetProductById(productID));
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timing);
  }, []);

const handleAddToCart = () => {
  const {_id,name,price,image,configuration} = productInfo[0];
  let quantity=0;
  let cart = {_id,name,price,image,configuration,quantity}
  console.log(cart);
  dispatch(actAddToCart(cart))
}

  return (
    <>
      <section className="product-detail">
        <div className="row">
          <div className="col-8 product-left">
            <div className="product-media">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                navigation
                modules={[FreeMode, Navigation, Thumbs]}
                direction={"vertical"}
                className="mySwiper"
              >
                {productInfo.map((item, index) => (
                  <>
                    <SwiperSlide>
                      <img src={item.image} />
                    </SwiperSlide>
                  </>
                ))}

                <SwiperSlide className="traiNghiem">
                  <Icon icon={faCameraAlt} style={{ color: "#ffffff" }} />
                </SwiperSlide>
              </Swiper>

              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={false}
                grabCursor={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {productInfo.map((item, index) => (
                  <>
                    <SwiperSlide>
                      <img src={item.image} />
                    </SwiperSlide>
                  </>
                ))}

                <SwiperSlide className="traiNghiem">
                  <div className="traiNghiemContent">
                    <span className="text-h2 font-extrabold">
                      Bạn đã trải nghiệm sản phẩm?
                    </span>
                    <p className="mt-3 text-h3">
                      Dù hài lòng hay chưa ưng, hãy chia sẻ cùng chúng mình nhé!
                    </p>
                    <button className="btn btn-primary btnShare">
                      <Icon icon={faCameraAlt} className="mr-2" />
                      Chia sẻ
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="cauHinh">
              <h3 className="cauHinh__title">
                {" "}
                <img src={icon2} alt="" /> Cấu hình & đặc điểm
              </h3>
              <div className="cauHinh__chart">
                <div className="chartWrapper">
                  <Radar data={data} options={options} />
                </div>
              </div>
              <div className="cauHinh__info">
                <table className="table text-left">
                  <tbody>
                    <tr>
                      <td colSpan={2}>
                        <div className="infoTitle">
                          <h3>
                            {" "}
                            <img src={cpuIcon} /> Vi xử lý ( CPU){" "}
                            <Icon
                              icon={faInfoCircle}
                              className="infoTitleIcon"
                            />
                          </h3>
                        </div>
                        <div className="infoDes">
                          <p>{productInfo[0].configuration.cpu}</p>
                        </div>
                      </td>
                      <td colSpan={2}>
                        <div className="infoTitle">
                          <h3>
                            {" "}
                            <img src={ramIcon} /> RAM{" "}
                            <Icon
                              icon={faInfoCircle}
                              className="infoTitleIcon"
                            />
                          </h3>
                        </div>
                        <div className="infoDes">
                          <p>{productInfo[0].configuration.ram}</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <div className="infoTitle">
                          <h3>
                            {" "}
                            <img src={monitorIcon} /> Màn hình{" "}
                            <Icon
                              icon={faInfoCircle}
                              className="infoTitleIcon"
                            />
                          </h3>
                        </div>
                        <div className="infoDes">
                          <p>
                          {productInfo[0].configuration.display}
                          </p>
                        </div>
                      </td>
                      <td colSpan={2}>
                        <div className="infoTitle">
                          <h3>
                            {" "}
                            <img src={gpuIcon} /> Card đồ họa (GPU){" "}
                            <Icon
                              icon={faInfoCircle}
                              className="infoTitleIcon"
                            />
                          </h3>
                        </div>
                        <div className="infoDes">
                          <p>{productInfo[0].configuration.gpu}</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <div className="infoTitle">
                          <h3>
                            {" "}
                            <img src={harddiskIcon} /> Lưu trữ{" "}
                            <Icon
                              icon={faInfoCircle}
                              className="infoTitleIcon"
                            />
                          </h3>
                        </div>
                        <div className="infoDes">
                          <p>{productInfo[0].configuration.memory}</p>
                        </div>
                      </td>
                      <td colSpan={2}>
                        <div className="infoTitle">
                          <h3>
                            {" "}
                            <img src={batteryIcon} /> Pin{" "}
                            <Icon
                              icon={faInfoCircle}
                              className="infoTitleIcon"
                            />
                          </h3>
                        </div>
                        <div className="infoDes">
                          <p>{productInfo[0].configuration.pin}</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <div className="infoTitle">
                          <h3>
                            {" "}
                            <img src={connectIcon} /> Kết nối chính{" "}
                            <Icon
                              icon={faInfoCircle}
                              className="infoTitleIcon"
                            />
                          </h3>
                        </div>
                        <div className="infoDes">
                          <p>{productInfo[0].configuration.ports}</p>
                        </div>
                      </td>
                      <td colSpan={2}>
                        <div className="infoTitle">
                          <h3>
                            {" "}
                            <img src={stackIcon} /> Trọng lượng{" "}
                            <Icon
                              icon={faInfoCircle}
                              className="infoTitleIcon"
                            />
                          </h3>
                        </div>
                        <div className="infoDes">
                          <p>{productInfo[0].configuration.weight}</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="baoHanhDoiTra">
                <h3>
                  {" "}
                  <img src={shieldCheckIcon} /> Bảo hành, đổi trả
                </h3>
                <ul>
                  <li>
                    Bảo hành <strong>12 tháng tại LaptopPro</strong>
                  </li>
                  <li>Đổi mới trong 15 ngày đầu tiên</li>
                </ul>
                <span>
                  {" "}
                  <Icon icon={faHeadset} /> Câu hỏi thường gặp
                </span>
              </div>
              <div className="vanChuyen">
                <h3>
                  {" "}
                  <img src={truckIcon} alt="" /> Dự kiến vận chuyển
                </h3>
                <p>
                  Hãy chọn địa chỉ để xem dự tính thời gian và chi phí nhận hàng
                </p>
                <span>
                  <Icon icon={faPlus} /> Chọn địa chỉ
                </span>
              </div>
              <div className="motaSanPham">
                <h3>
                  {" "}
                  <img src={clipboardIcon} />
                  Mô tả sản phẩm
                </h3>
                <p>{productInfo[0].description}</p>
              </div>
              <div className="review">
                <div className="dropdown-divider"></div>
                <h3>
                  {" "}
                  <img src={chatIcon} /> Đánh giá & nhận xét
                </h3>
                <div className="review__content">
                  <Icon icon={faInbox} className="rvctIcon" />
                  <h4>Chưa có đánh giá & nhận xét</h4>
                  <p>Nên mua hay không? Hãy giúp anh em bạn nhé</p>
                  <button className="btn">
                    <Icon icon={faStar} className="mr-3" />
                    Đánh giá
                  </button>
                </div>
                <div className="dropdown-divider"></div>
              </div>
              <div className="lastOne">
                <div class="row">
                  <div className="col-7">
                    <p>
                      <strong>
                        Không tim thấy thông tin review mong muốn?
                      </strong>
                    </p>
                    <p>
                      Hãy liên hệ với chúng tôi để được hỗ trợ trải nghiệm thực
                      tế sản phẩm bạn nhé!
                    </p>
                    <div className="buttonContact">
                      <button className="btn"> Liên hệ LaptopPro</button>
                    </div>
                  </div>
                  <div className="col-5 w-100">
                    <img src={human} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 product-right">
            <div className="product-right-content">
              <div className="product-info">
                <div className="product-more">
                  <p className="product-rate">
                    <Icon
                      icon={faStar}
                      style={{
                        color: "#FFAC0B",
                        marginRight: "5px",
                        fontSize: "20px",
                      }}
                    />
                    Đánh giá sản phẩm
                  </p>
                  <div className="divide" style={{ width: 1 }}>
                    {" "}
                  </div>
                  <p className="product-save">
                    Lưu <Icon icon={faBookmark} />
                  </p>
                </div>
                <div className="product-name">
                  <h4>Máy tính</h4>
                </div>
                <div className="product-price">
                  <h4>{productInfo[0].price.toLocaleString('vi-VN', {style : 'currency', currency : 'vnd'})}</h4>
                </div>
                <div className="product-sale">
                  <p>
                    <Icon icon={faBoltLightning} className="boltIcon" /> Giảm
                    thêm 100.000đ khi mua phần mềm Microsoft 365 kèm laptop
                  </p>
                  <p>
                    <Icon icon={faBoltLightning} className="boltIcon" /> Giảm
                    trực tiếp 2.000.000đ trừ vào giá bán sản phẩm
                  </p>
                  <p>
                    <Icon icon={faBoltLightning} className="boltIcon" /> Mua 1
                    tặng 1
                  </p>
                </div>
              </div>
              <div className="addToCart">
                <button className="btn btnAddToCart" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
