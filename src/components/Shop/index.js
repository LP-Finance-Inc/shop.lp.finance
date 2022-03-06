import React, { useState } from "react";
import { ShopApi } from "../../assets/api/Shop";
import QrCodeModel from "../../Models/QrCodeModel";

const Shop = () => {
  const [QrCodeState, setQrCodeState] = useState(false);
  const [options, setOptions] = useState({
    ProductReceiverName: "LP Devnet Shop",
    ProductName: "",
    ProductPrice: "",
    ProductTokenType: "lpcad",
    ProductImg: "",
    walletAddress: "EN2CV9nCnH9nBF9GyGYG9B3haNriNBkrPo8jF4c6mzUi",
  });

  const QrCodeFun = (ProductName, ProductImg, ProductPrice) => {
    setQrCodeState(true);
    setOptions({
      ...options,
      ProductName,
      ProductPrice,
      ProductImg,
    });
  };

  return (
    <>
      {QrCodeState && (
        <QrCodeModel
          QrCodeState={QrCodeState}
          setQrCodeState={setQrCodeState}
          options={options}
        />
      )}

      <div className="container Shop">
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="img_section">
              <img src="/images/LP_Finance_Logo.png" alt="Loading..." />
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <div className="title text-center">
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
                          <button
                            onClick={() =>
                              QrCodeFun(list.name, list.Url, list.price)
                            }
                          >
                            Pay
                          </button>
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
