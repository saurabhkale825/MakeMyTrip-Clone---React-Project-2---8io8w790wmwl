import React from "react";
import "./NetBankingPayment.css";
import Axis from "../../../Assest/Logo/Axis.png";
import HDFC from "../../../Assest/Logo/HDFC.png";
import ICICI from "../../../Assest/Logo/ICICi.png";
import SBI from "../../../Assest/Logo/SBI.png";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

function NetBankingPayment() {
  return (
    <div className="net-banking-payment">
      <div className="banks-options">
        <div className="flex gap-x-5 items-center border-b border-gray-300 p-1">
          <span>
            <PanoramaFishEyeIcon />
          </span>
          <div className="flex  items-center gap-x-2 font-semibold">
            <div>
              <img src={Axis} alt="logo" width="30px" />
            </div>
            <div>Axis Bank</div>
          </div>
        </div>

        <div className="flex gap-x-5 items-center border-b border-gray-300 p-1">
          <span>
            <PanoramaFishEyeIcon />
          </span>
          <div className="flex  items-center gap-x-2 font-semibold">
            <div>
              <img src={HDFC} alt="logo" width="30px" />
            </div>
            <div>HDFC Bank</div>
          </div>
        </div>

        <div className="flex gap-x-5 items-center  border-b border-gray-300 p-1">
          <span>
            <PanoramaFishEyeIcon />
          </span>
          <div className="flex  items-center gap-x-2 font-semibold">
            <div>
              <img src={ICICI} alt="logo" width="30px" />
            </div>
            <div>ICICI Bank</div>
          </div>
        </div>

        <div className="flex gap-x-5 items-center p-1">
          <span>
            <PanoramaFishEyeIcon />
          </span>
          <div className="flex  items-center gap-x-2 font-semibold">
            <div>
              <img src={SBI} alt="logo" width="30px" />
            </div>
            <div>SBI Bank</div>
          </div>
        </div>
      </div>

      <div className="flex justify-end ">
        <div className="primary-btn">Proceed</div>
      </div>

      <div className="px-5 text-left ml-6 mt-4">
        <div>
          <span>By coninuing to pay, I understand and agree with the </span>
          <span className="text-blue-500">privacy policy</span>
          <span>, the</span>
          <span className="text-blue-500"> user agreement</span>
          <span> and </span>
          <span className="text-blue-500">terms of services</span>
          <span> of makemytrip</span>
        </div>
      </div>
    </div>
  );
}

export default NetBankingPayment;
