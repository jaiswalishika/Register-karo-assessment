import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      id: 2,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      id: 3,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      id: 4,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
  ];

  const handlePrevious = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-orange-400">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-orange-400">
            ⭐
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-[#1e4164] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">
            What people say about us
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors"
            >
              <FaChevronLeft className="w-5 h-5 text-[#1e4164]" />{" "}
              {/* React icon for left arrow */}
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-orange-400 hover:bg-orange-500 transition-colors"
            >
              <FaChevronRight className="w-5 h-5 text-white" />{" "}
              {/* React icon for right arrow */}
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-3"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl text-gray-400">"</span>
                    <div className="flex text-sm">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-4">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center">
                    <img
                      src="/api/placeholder/40/40"
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === activeSlide
                  ? "bg-orange-400"
                  : "bg-white bg-opacity-30"
              }`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
