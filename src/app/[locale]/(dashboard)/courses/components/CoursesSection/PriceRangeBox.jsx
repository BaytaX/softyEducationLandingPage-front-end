import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

function PriceRangeBox({ handleFilter, priceRange, value }) {
  const max_course_price = priceRange?.attributes?.max_course_price;
  return (
    <div className="flex flex-col gap-12 w-11/12 [direction:ltr] ">
      <RangeSlider
        min={0}
        max={max_course_price}
        step={1}
        value={value}
        onInput={(e) => handleFilter(e, "price")}
        id="range-slider"
      />
      <div className="flex items-center justify-around flex-wrap gap-y-8">
        <div className="border border-gray-300 p-6 rounded-full w-[13.5rem] _4xl:w-[15rem] _lg:!w-[30rem]">
          <p className="text-[1.6rem] font-medium _2xl:text-[1.8rem]  _lg:!text-[2.8rem] ">
            TND{" "}
            <span className="font-extralight text-gray-400">
              {`min: ${value[0]}`}
            </span>
          </p>
        </div>
        <div className="border border-gray-300 p-6 w-[13.5rem] rounded-full _4xl:w-[15rem] _lg:!w-[30rem]">
          <p className="text-[1.6rem] font-medium _2xl:text-[1.8rem]  _lg:!text-[2.8rem] ">
            TND{" "}
            <span className="font-extralight text-gray-400">
              {`max: ${value[1]}`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PriceRangeBox;
