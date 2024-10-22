import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productThunk } from "../redux/product.slice";

function Card() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.product.product);
  // console.log(result);

  useEffect(() => {
    dispatch(productThunk());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-center gap-5 p-4  ">
      {result && result.length > 0 ? (
        result.map((res, index) => (
          <div
            className="card w-full md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden"
            key={index}
          >
            <div className="imgbox">
              <img
                src={res.thumbnail}
                alt="img"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="title">
              <p className="font-semibold">{res.title}</p>
            </div>
            <div className="Description ">
              <p
                className="text-gray-600"
                style={{ height: "100px", overflow: "hidden" }}
              >
                {res.description}
              </p>
            </div>
            <div className="btn btn-info p-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1> Data Not Found </h1>
      )}
    </div>
  );
}

export default Card;
