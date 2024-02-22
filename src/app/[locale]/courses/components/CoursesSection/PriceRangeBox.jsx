import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

function PriceRangeBox({ handleFilter, priceRange }) {
  const PRICE_MIN = priceRange?.attributes?.price_min;
  const PRICE_MAX = priceRange?.attributes?.price_max;
  const max_course_price = priceRange?.attributes?.max_course_price;

  const [priceValue, sePriceValue] = useState([PRICE_MIN, PRICE_MAX]);
  useEffect(() => {
    handleFilter(priceValue, "price");
  }, [handleFilter, priceValue]);
  return (
    <div className="flex flex-col gap-12 w-11/12 [direction:ltr] ">
      <RangeSlider
        min={0}
        max={max_course_price}
        step={1}
        value={priceValue}
        onInput={sePriceValue}
        // onThumbDragEnd={()=>handleFilter(priceValue, "price")}
        id="range-slider"
      />
      <div className="flex items-center justify-around">
        <div className="border border-gray-300 p-6 rounded-full w-[13.5rem]">
          <p className="text-[1.6rem] font-medium">
            TND{" "}
            <span className="font-extralight text-gray-400">
              {`min: ${priceValue[0]}`}
            </span>
          </p>
        </div>
        <div className="border border-gray-300 p-6 w-[13.5rem] rounded-full ">
          <p className="text-[1.6rem] font-medium">
            TND{" "}
            <span className="font-extralight text-gray-400">
              {`max: ${priceValue[1]}`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PriceRangeBox;
