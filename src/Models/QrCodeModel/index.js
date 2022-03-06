import { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useQRCode } from "react-qrcodes";

const QrCodeModel = ({ QrCodeState, setQrCodeState, options }) => {
  const defaultOptions = {
    type: "image/png",
    quality: 0.92,
    level: "M",
    margin: 4,
    scale: 4,
    width: 4,
    color: {
      dark: "#000000ff",
      light: "#ffffffff",
    },
  };

  const qrData = `{
    "receiverName": "${options.ProductReceiverName}",  
    "imageUrl": "${options.ProductImg}",
    "tokenType": "${options.ProductTokenType}",
    "amount" :"${options.ProductPrice.substr(1)}",
    "walletAddress": "${options.walletAddress}"
  }`;

  console.log(qrData);

  const [inputRef] = useQRCode({
    text: qrData,
    options: options ? options : { ...defaultOptions },
  });

  useEffect(() => {
    if (setQrCodeState) {
      var overlay = document.getElementById("overlay");
      var popup = document.getElementById("popup");
      popup.classList.add("show");
      overlay.classList.add("show");
    }
  }, []);

  return (
    <>
      {QrCodeState && (
        <div id="overlay" className="Model_overlay">
          <div className="Model" id="popup">
            <div className="container-fluid Model_section">
              <div className="row d-flex align-items-center Model_top_Section pb-2">
                <div className="col-lg-8 col-10">
                  <div className="title">
                    <p>Scan on LP Pay App</p>
                  </div>
                </div>
                <div className="col-lg-4 col-2  p-0 m-0 d-flex justify-content-end">
                  <div className="close_div">
                    <AiOutlineCloseCircle
                      className="close_icon"
                      onClick={() => setQrCodeState(false)}
                    />
                  </div>
                </div>
              </div>
              <div className="row Model_bottom_Section mt-4">
                <div className="col-12 d-flex justify-content-center">
                  <div className="QrCode_section mt-5">
                    <img ref={inputRef} className="qrcode" alt="loading..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QrCodeModel;
