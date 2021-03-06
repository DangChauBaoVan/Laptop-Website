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
//     "V??n Ph??ng, h???c t???p",
//     "2D Design",
//     "Quay d???ng Video",
//     "3D design",
//     "Gaming",
//     "L???p tr??nh",
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
      "V??n Ph??ng, h???c t???p",
      "2D Design",
      "Quay d???ng Video",
      "3D design",
      "Gaming",
      "L???p tr??nh",
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
                      B???n ???? tr???i nghi???m s???n ph???m?
                    </span>
                    <p className="mt-3 text-h3">
                      D?? h??i l??ng hay ch??a ??ng, h??y chia s??? c??ng ch??ng m??nh nh??!
                    </p>
                    <button className="btn btn-primary btnShare">
                      <Icon icon={faCameraAlt} className="mr-2" />
                      Chia s???
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="cauHinh">
              <h3 className="cauHinh__title">
                {" "}
                <img src={icon2} alt="" /> C???u h??nh & ?????c ??i???m
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
                            <img src={cpuIcon} /> Vi x??? l?? ( CPU){" "}
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
                            <img src={monitorIcon} /> M??n h??nh{" "}
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
                            <img src={gpuIcon} /> Card ????? h???a (GPU){" "}
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
                            <img src={harddiskIcon} /> L??u tr???{" "}
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
                            <img src={connectIcon} /> K???t n???i ch??nh{" "}
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
                            <img src={stackIcon} /> Tr???ng l?????ng{" "}
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
                  <img src={shieldCheckIcon} /> B???o h??nh, ?????i tr???
                </h3>
                <ul>
                  <li>
                    B???o h??nh <strong>12 th??ng t???i LaptopPro</strong>
                  </li>
                  <li>?????i m???i trong 15 ng??y ?????u ti??n</li>
                </ul>
                <span>
                  {" "}
                  <Icon icon={faHeadset} /> C??u h???i th?????ng g???p
                </span>
              </div>
              <div className="vanChuyen">
                <h3>
                  {" "}
                  <img src={truckIcon} alt="" /> D??? ki???n v???n chuy???n
                </h3>
                <p>
                  H??y ch???n ?????a ch??? ????? xem d??? t??nh th???i gian v?? chi ph?? nh???n h??ng
                </p>
                <span>
                  <Icon icon={faPlus} /> Ch???n ?????a ch???
                </span>
              </div>
              <div className="motaSanPham">
                <h3>
                  {" "}
                  <img src={clipboardIcon} />
                  M?? t??? s???n ph???m
                </h3>
                <p>{productInfo[0].description}</p>
              </div>
              <div className="review">
                <div className="dropdown-divider"></div>
                <h3>
                  {" "}
                  <img src={chatIcon} /> ????nh gi?? & nh???n x??t
                </h3>
                <div className="review__content">
                  <Icon icon={faInbox} className="rvctIcon" />
                  <h4>Ch??a c?? ????nh gi?? & nh???n x??t</h4>
                  <p>N??n mua hay kh??ng? H??y gi??p anh em b???n nh??</p>
                  <button className="btn">
                    <Icon icon={faStar} className="mr-3" />
                    ????nh gi??
                  </button>
                </div>
                <div className="dropdown-divider"></div>
              </div>
              <div className="lastOne">
                <div class="row">
                  <div className="col-7">
                    <p>
                      <strong>
                        Kh??ng tim th???y th??ng tin review mong mu???n?
                      </strong>
                    </p>
                    <p>
                      H??y li??n h??? v???i ch??ng t??i ????? ???????c h??? tr??? tr???i nghi???m th???c
                      t??? s???n ph???m b???n nh??!
                    </p>
                    <div className="buttonContact">
                      <button className="btn"> Li??n h??? LaptopPro</button>
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
                    ????nh gi?? s???n ph???m
                  </p>
                  <div className="divide" style={{ width: 1 }}>
                    {" "}
                  </div>
                  <p className="product-save">
                    L??u <Icon icon={faBookmark} />
                  </p>
                </div>
                <div className="product-name">
                  <h4>M??y t??nh</h4>
                </div>
                <div className="product-price">
                  <h4>{productInfo[0].price.toLocaleString('vi-VN', {style : 'currency', currency : 'vnd'})}</h4>
                </div>
                <div className="product-sale">
                  <p>
                    <Icon icon={faBoltLightning} className="boltIcon" /> Gi???m
                    th??m 100.000?? khi mua ph???n m???m Microsoft 365 k??m laptop
                  </p>
                  <p>
                    <Icon icon={faBoltLightning} className="boltIcon" /> Gi???m
                    tr???c ti???p 2.000.000?? tr??? v??o gi?? b??n s???n ph???m
                  </p>
                  <p>
                    <Icon icon={faBoltLightning} className="boltIcon" /> Mua 1
                    t???ng 1
                  </p>
                </div>
              </div>
              <div className="addToCart">
                <button className="btn btnAddToCart" onClick={handleAddToCart}>Th??m v??o gi??? h??ng</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
