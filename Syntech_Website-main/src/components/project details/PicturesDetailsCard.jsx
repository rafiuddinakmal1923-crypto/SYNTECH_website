const PicturesDetailsCard = ({
  desc,
  pictures,
  pictureHeight = "20vh",
  pictureWidth = "20vw",
  backgroundColor,
}) => {
  return (
    <div
      className={`${backgroundColor} font-Poppins text-white p-6 rounded-xl w-5xl mx-auto`}
    >
      <div>
        <h1 className="flex justify-center text-2xl font-semibold">{desc}</h1>
      </div>
      <div className="flex flex-row flex-wrap gap-3 w-full mt-8 justify-center">
        {pictures.map((slide, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md"
            style={{ height: pictureHeight, width: pictureWidth }}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PicturesDetailsCard;
