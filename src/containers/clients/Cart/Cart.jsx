import React, { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GrTicket } from "react-icons/gr";
import { FaRegClipboard } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import {
  AiOutlineDollarCircle,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import "./Cart.scss";

import human2 from "../../../assets/images/human2.png";
import promo from "../../../assets/images/promo.png";
import { useDispatch, useSelector } from "react-redux";
import { actDecreaseQuantity, actIncreseQuantity, actRemoveFromCart } from "./module/action";

const Cart = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showApDung, setShowApDung] = useState(false);
  const { cart, totalQuantity } = useSelector((state) => state.cartReducer);
  const handleRemoveFromCart = (id) =>{
      dispatch(actRemoveFromCart(id))
  }
  const handleIncreseProduct = (id) =>{
    dispatch(actIncreseQuantity(id))
  }
  const handleDecreseProduct = (id) =>{
    dispatch(actDecreaseQuantity(id))
  }
  const renderCartItem = () => {
    return cart.map((item, index) => (
      <>
        <div className="cartItem" index={index}>
          <div className="row">
            <div className="col-2 productImg">
              <div className="imgContent">
                <img
                  className="img-fluid"
                  src={item.image}
                  alt="productImg"
                />
              </div>
            </div>
            <div className="col-6 productInfo text-left">
              <h3>{item.name}</h3>
              <p className="tomTatCauHinh mt-3 ">
                <BsInfoCircle className="mr-3 icon" />
                <span>{item.configuration.cpu.substring(0, item.configuration.cpu.indexOf(','))}</span>
                <span>{item.configuration.ram.substring(0, item.configuration.ram.indexOf(','))}</span>
                <span>{item.configuration.memory}</span>
                <span>{item.configuration.gpu}</span>
              </p>
              <p>
                <AiOutlineDollarCircle className="mr-3 icon" />
                <span style={{ color: "rgba(254, 52, 100", fontWeight: "700" }}>
                  {item.price.toLocaleString('vi-VN', {style : 'currency', currency : 'vnd'})}
                </span>
              </p>
            </div>
            <div className="col-2 amount">
              <div className="amount__content">
                <button onClick={()=>handleDecreseProduct(item._id)}>
                  {" "}
                  <AiOutlineMinus />{" "}
                </button>
                <p className="mx-4">{item.quantity}</p>
                <button onClick={()=>handleIncreseProduct(item._id)}>
                  {" "}
                  <AiOutlinePlus />{" "}
                </button>
              </div>
            </div>
            <div className="col-2 priceDelete">
              <div className="price">
                <h3>{item.price.toLocaleString('vi-VN', {style : 'currency', currency : 'vnd'})}</h3>
              </div>
              <div className="delete">
                <button onClick={()=>handleRemoveFromCart(item._id)}>
                  Xóa <TiDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    ));
  };
  const handleOnchangePromo = (event) => {
    let value = event.target.value;
    console.log(value);
    if (value === "") {
      setShowApDung(false);
    }
    if (value) {
      setShowApDung(true);
    }
  };
  const handleTinhTien = ()=>{
    let total = cart?.reduce((tongTien,sanPham)=>{
      return tongTien+=(sanPham.price*sanPham.quantity)
    },0)
    return total.toLocaleString('vi-VN', {style : 'currency', currency : 'vnd'});
  }
  
  if (totalQuantity===0)
    return (
      <div>
        <section className="cartEmpty">
          <div className="cartEmpty__content">
            <FiShoppingCart className="cartIcon" />

            <h3>Giỏ hàng trống</h3>
            <img src={human2} alt="" className="human" />
          </div>
          <div className="dropdown-divider"></div>
        </section>
      </div>
    );
  return (
    <div>
      <section className="cart">
        <h3 className="cartTitle">Giỏ hàng ({totalQuantity})</h3>
        <div className="cartContent">
          <div className="row">
            <div className="col-8 cartContent__left">
              
              {renderCartItem()}
            </div>
            <div className="col-4">
              <div className="cartTopRight">
                <p>
                  <GrTicket className="mr-3" />
                  Mã khuyến mại
                </p>
                <div className="inputVoucher">
                  <div className="promoImg">
                    <img src={promo} className="img-fluid" alt="" />
                  </div>
                  <div className="promoInput">
                    <input
                      type="text"
                      onChange={handleOnchangePromo}
                      placeholder="Nhập mã khuyến mại"
                      maxlength="10"
                    />
                    <div
                      className="apDung"
                      style={{ display: showApDung ? "block" : "none" }}
                    >
                      ÁP DỤNG
                    </div>
                  </div>
                </div>
              </div>
              <div className="cartBotRight">
                <div className="cartBotRightTop">
                  <p className="cbr__title">
                    <FaRegClipboard className="mr-3" />
                    Tóm tắt đơn hàng
                  </p>
                  <div className="cartBotRight__content">
                    <div className="row">
                      <div className="col-6 text-left">
                        <p>Tạm tính</p>
                        <p>Khuyến mãi</p>
                      </div>
                      <div className="col-6 text-right">
                        <p>{handleTinhTien()}</p>
                        <p>0</p>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="total">
                      <div className="row">
                        <div className="col-6 text-left">
                          <p>Tổng cộng</p>
                        </div>
                        <div className="col-6 text-right">
                          <p className="totalPrice">{handleTinhTien()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-divider theSC"></div>
                <div className="cardBotRightBot">
                  <button className="btn ">Đặt Hàng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
