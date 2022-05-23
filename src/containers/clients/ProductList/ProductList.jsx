import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actLayDanhSachSanPham } from "./module/action";
import "./ProductList.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import ProductItem from "components/ProductItem/ProductItem";
import Pagination from "components/Pagination/Pagination";
import { Link } from "react-router-dom";


const ProductList = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { productList } = useSelector((state) => state.danhSachSanPhamReducer);
  const [items, setItems] = useState(productList);
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      dispatch(actLayDanhSachSanPham());
      setItems(productList);
      setLoading(false);
    }, 1000);
    if (items) {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }

    return () => clearTimeout(timing);
  }, [itemOffset, itemsPerPage]);
  console.log(items);
  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div >
      <h1 className="text-left alllaptop">Tất cả laptop</h1>
      <div class="cards text-left ">
        {currentItems?.map((item, index) => (
          <>
            <Link to={`/product-detail/${item._id}`} class="card">
              <img src={item.image} alt="" class="card-image" />
              <div class="card-content">
                <div class="card-top">
                  <h3 class="card-title">{item.name}</h3>
                  <div class="card-user">
                    <h4>
                       Giá <span>{item.price.toLocaleString('vi-VN', {style : 'currency', currency : 'vnd'})} </span>
                    </h4>
                  </div>
                </div>
                <div class="card-bottom">
                  <Icon icon={faGift} className="iconGift" />
                  <span>Giảm giá & Nhiều quà tặng kèm</span>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
      <div className="paginate">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default ProductList;
