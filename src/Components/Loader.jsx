import React from "react";
import { Oval } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <Oval
        height={80}
        width={80}
        color="#2B7A0B"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#5BB318"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
