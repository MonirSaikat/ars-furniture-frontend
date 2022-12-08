import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { RiUserSmileLine } from 'react-icons/ri';
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { RxStar } from 'react-icons/rx';
import { Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const CustomPagination = () => {
  return <Pagination className='mt-5' />
}

const CustomReivew = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="section-title">Customer Review</h2>
        <Swiper
          spaceBetween={50}
          className="cursor-grab"
          scrollbar={{ draggable: true }}
          breakpoints={{
            520: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          modules={[CustomPagination, A11y]}
        >
          <SwiperSlide className="p-5 bg-gray-100 shadow-md">
            <div className="flex items-center mb-3">
              <RiUserSmileLine className="text-4xl mr-2" />
              <div>
                <h2 className="text-2xl">John Doe</h2>
                <span className="flex">
                  <RiStarFill fill="#FFBF00" />
                  <RiStarFill fill="#FFBF00" />
                  <RiStarFill fill="#FFBF00" />
                  <RiStarFill fill="#FFBF00" />
                  <RxStar />
                  {/* <RiStarHalfFill fill="#FFBF00" /> */}
                </span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Velit dolor perspiciatis
              saepe? Debitis neque accusantium nostrum ad
              fugiat, inventore laborum, nisi voluptates
              similique asperiores nobis tempore fugit
              commodi? Odit, delectus.
            </p>
          </SwiperSlide>
          <SwiperSlide className="p-5 bg-gray-100 shadow-md">
            <div className="flex items-center mb-3">
              <RiUserSmileLine className="text-4xl mr-2" />
              <div>
                <h2 className="text-2xl">Rishu</h2>
                <span className="flex">
                  <RiStarFill fill="#FFBF00" />
                  <RiStarFill fill="#FFBF00" />
                  <RiStarFill fill="#FFBF00" />
                  <RiStarFill fill="#FFBF00" />
                  <RxStar />
                  {/* <RiStarHalfFill fill="#FFBF00" /> */}
                </span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Velit dolor perspiciatis
              saepe? Debitis neque accusantium nostrum ad
              fugiat, inventore laborum, nisi voluptates
              similique asperiores nobis tempore fugit
              commodi? Odit, delectus.
            </p>
          </SwiperSlide>
          <SwiperSlide className="p-5 bg-gray-100 shadow-md">
            <div className="flex items-center mb-3">
              <RiUserSmileLine className="text-4xl mr-2" />
              <div>
                <h2 className="text-2xl">Jason Roy</h2>
                <span className="flex">
                  <RiStarFill fill="#FFBF00" />
                  <RiStarFill fill="#FFBF00" />
                  <RiStarFill fill="#FFBF00" />
                  <RiStarFill fill="#FFBF00" />
                  <RxStar />
                  {/* <RiStarHalfFill fill="#FFBF00" /> */}
                </span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Velit dolor perspiciatis
              saepe? Debitis neque accusantium nostrum ad
              fugiat, inventore laborum, nisi voluptates
              similique asperiores nobis tempore fugit
              commodi? Odit, delectus.
            </p>
          </SwiperSlide>
          <SwiperSlide className="p-5 bg-gray-100 shadow-md">
            <div className="flex items-center mb-3">
              <RiUserSmileLine className="text-4xl mr-2" />
              <div>
                <h2 className="text-2xl">Toufiq Islam</h2>
                <span className="flex">
                  <RiStarFill fill="#FFBF00" />
                  <RiStarFill fill="#FFBF00" />
                  <RiStarFill fill="#FFBF00" />
                  <RiStarFill fill="#FFBF00" />
                  <RiStarHalfFill fill="#FFBF00" />
                </span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Velit dolor perspiciatis
              saepe? Debitis neque accusantium nostrum ad
              fugiat, inventore laborum, nisi voluptates
              similique asperiores nobis tempore fugit
              commodi? Odit, delectus.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CustomReivew;
