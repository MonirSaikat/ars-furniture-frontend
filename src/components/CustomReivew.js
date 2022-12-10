import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { RiUserSmileLine } from 'react-icons/ri';
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { RxStar } from 'react-icons/rx';
import { Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { fetchReviews } from '../services/review-service';

const CustomPagination = () => {
  return <Pagination className='mt-5' />
}

const CustomReivew = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews()
      .then(data => {
        setReviews(data)
      });
  }, []);

  const renderReviews = reviews?.map((review) => {
    return <SwiperSlide className="p-5 bg-gray-100 shadow-md" key={review._id}>
      <div className="flex items-center mb-3">
        <RiUserSmileLine className="text-4xl mr-2" />
        <div>
          <h2 className="text-2xl">{review.user.name}</h2>
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

      <p>{review.text}</p>
    </SwiperSlide>
  });

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
          {renderReviews}
        </Swiper>
      </div>
    </div>
  );
}

export default CustomReivew;
