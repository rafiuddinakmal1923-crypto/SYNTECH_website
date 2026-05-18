import { useState, useEffect } from "react";

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // reset to first image whenever the images array changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [images]);

  const nextImage = () => {
    setCurrentImageIndex((p) => (p + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((p) => (p - 1 + images.length) % images.length);
  };
  const goToImage = (i) => {
    setCurrentImageIndex(i);
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Main image area */}
      <div
        className="
          relative w-full overflow-hidden rounded-2xl
          shadow-[0_25px_60px_rgba(0,0,0,0.55)]
          max-w-[250px]  max-h-[270px]
          sm:max-w-[350px] sm:max-h-[340px]
          md:max-w-[450px] md:max-h-[440px]
          lg:max-w-[550px] lg:max-h-[520px]
          xl:max-w-[650px] xl:max-h-[580px]
          2xl:max-w-[750px] 2xl:max-h-[620px]
        "
      >
        <img
          src={images[currentImageIndex]}
          alt={`Event image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover select-none"
          draggable="false"
        />

        {/* Always-visible arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/70 text-white p-2 rounded-full hover:outline-none hover:ring-2 hover:ring-white/60 z-20"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/70 text-white p-2 rounded-full hover:outline-none hover:ring-2 hover:ring-white/60 z-20"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs md:text-sm z-20">
            {currentImageIndex + 1}/{images.length}
          </div>
        )}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;