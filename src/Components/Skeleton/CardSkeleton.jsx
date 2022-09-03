import React from "react";

const CardSkeleton = () => {
  return (
    <div className="">
      <div className="card " style={{ width: "18rem" }}>
        <div className="card-body">
          <div className=" d-flex justify-content-center placeholder-glow">
            <div className="card-img-top image placeholder" src="" alt=""></div>
          </div>
        </div>
        <div className="card-footer border-top product_details">
          <div className="card-text placeholder-glow">
            <span className="placeholder">NameName</span>
            <br />
            <span className="placeholder">description descriptions </span>
            <br />
            <span className="placeholder">item.price </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
