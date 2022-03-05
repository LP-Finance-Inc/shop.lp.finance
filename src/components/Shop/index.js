import React from "react";
import { ShopApi } from "../../assets/api/Shop";

const Shop = () => {
  return (
    <>
      <div className="container Shop">
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="img_section">
              <img src="/images/LP_Finance_Logo.png" alt="Loading..." />
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <div className="title">
            <h1>Welcome to LP Finance Devnet Shop </h1>
          </div>
        </div>

        <div className="row mt-3 mb-5">
          {ShopApi.map((list) => {
            return (
              <div className="col-lg-4 col-md-6 col-12 mt-4" key={list.id}>
                <div className="shop_card">
                  <div className="row">
                    <div className="col-12 card_img d-flex justify-content-center">
                      <img src={list.img} alt="Loading..." />
                    </div>
                    <div className="col-12 d-flex justify-content-center details mt-2">
                      <div className="name">
                        <p>{list.name}</p>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center details mt-1">
                      <div className="price">
                        <p>Price: {list.price}</p>
                      </div>
                    </div>

                    <div className="col-12 btn_Section mt-3">
                      <div className="row d-flex justify-content-center">
                        <div className="col-7">
                          <button>Pay</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
