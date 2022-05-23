import React, { useEffect, useState } from "react";
import "./Header.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faSearch,
  faBars,
  faUser,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { RiUserLine } from "react-icons/ri";
import { BsTruck } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { cart, totalQuantity } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          Laptop<span>Pro</span>{" "}
        </Link>
        {/* <div className="icons">
        <div id="menu-btn" className="fas fa-bars" >
          <Icon icon={faBars} /> Danh Mục
          </div>
        </div> */}

        <form action className="search-form">
          <label htmlFor="search-box" className="fas fa-search mr-4">
            <Icon icon={faSearch} />
          </label>
          <input type="search" id="search-box" placeholder="Tên sản phẩm..." />
        </form>
        <div className="icons groupIcons">
          <Link
            to={`/cart`}
            className="btn btn-light btn-circle btn-sm shoppingCart"
          >
            <FiShoppingCart className="mr-2" />
            {totalQuantity}
          </Link>
          <a href="#" className="btn btn-light btn-circle btn-sm user">
            <RiUserLine />
          </a>
          <a href="#" className="btn btn-light btn-circle btn-sm delivery">
            <BsTruck />
          </a>
          <a href="#" className="btn btn-light btn-circle btn-sm bell">
            <AiOutlineBell />
          </a>
        </div>
      </header>
    </>
  );
}
