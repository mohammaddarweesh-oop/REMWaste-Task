import React, { useRef } from "react";

const Carousel = ({
  skips,
  selectedSkip,
  handleSelect,
  calculateTotalPrice,
  getSkipImage,
}) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={() => scroll("left")}>
        &lt;
      </button>
      <div className="skips-carousel" ref={carouselRef}>
        {skips.map((skip) => (
          <div
            key={skip.id}
            className={`carousel-item ${
              selectedSkip === skip.id ? "selected" : ""
            }`}
            onClick={() => handleSelect(skip.id)}
          >
            {console.log(skip.size)}
            <img
              src={getSkipImage(skip.size)}
              alt={`${skip.size} Yard Skip`}
              className="skip-image"
            />
            <h3 className="skip-title">{skip.size} Yard Skip</h3>
            <p className="price">
              Price: {calculateTotalPrice(skip.price_before_vat, skip.vat)}
            </p>
            {skip.allowed_on_road === false && (
              <p className="road-warning">Not Allowed On The Road</p>
            )}
            <span
              className={`skip-status ${
                !skip.allowed_on_road ? "disabled" : ""
              }`}
              onClick={(e) => {
                if (!skip.allowed_on_road) e.stopPropagation();
              }}
            >
              {selectedSkip === skip.id ? "Selected" : "Select"}
            </span>
          </div>
        ))}
      </div>
      <button className="carousel-btn next" onClick={() => scroll("right")}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
