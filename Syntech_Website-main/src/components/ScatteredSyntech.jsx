const ScatteredSyntech = ({
  className = "",
  adjustWidth = 0,
  adjustTop = 0,
  adjustLeft = 0,
}) => {
  const backgroundTexts = [
    {
      text: "S Y N T E C H",
      width: 840,
      top: 517,
      left: 251,
      className: "rotate-[0.12deg] opacity-5 text-8xl whitespace-nowrap",
    },
    {
      text: "S Y N T E C H",
      width: 354,
      top: 617,
      left: 783,
      className: "rotate-[90.26deg] opacity-10 text-4xl whitespace-nowrap",
    },
    {
      text: "S Y N T E C H",
      width: 354,
      top: 503,
      left: -121,
      className: "rotate-[90.26deg] opacity-10 text-4xl whitespace-nowrap",
    },
    {
      text: "S Y N T E C H",
      width: 220,
      top: 611,
      left: 686,
      className: "rotate-[0.12deg] opacity-10 text-4xl",
    },
    {
      text: "S Y N T E C H",
      width: 479,
      top: 641,
      left: 67,
      className: "rotate-[0.12deg] opacity-5 text-5xl whitespace-nowrap",
    },
    {
      text: "S Y N T E C H",
      width: 479,
      top: 326,
      left: 321,
      className: "rotate-[0.12deg] opacity-5 text-5xl whitespace-nowrap",
    },
    {
      text: "S Y N T E C H",
      width: 479,
      top: 738,
      left: 703,
      className: "rotate-[0.12deg] opacity-[0.12] text-5xl whitespace-nowrap",
    },
    {
      text: "S Y N T E C H",
      width: 479,
      top: 748,
      left: 47,
      className: "rotate-[0.12deg] opacity-10 text-[40px]",
    },
    {
      text: "S Y N T E C H",
      width: 479,
      top: 380,
      left: 84,
      className: "rotate-[0.12deg] opacity-5 text-5xl whitespace-nowrap",
    },
    {
      text: "S Y N T E C H",
      width: 479,
      top: 318,
      left: 779,
      className: "rotate-[0.12deg] opacity-5 text-5xl whitespace-nowrap",
    },
    {
      text: "S Y N T E C H",
      width: 479,
      top: 646,
      left: 391,
      className: "rotate-[0.12deg] opacity-10 text-5xl",
    },
    {
      text: "S Y N T E C H",
      width: 220,
      top: 703,
      left: 491,
      className: "rotate-[0.12deg] opacity-10 text-2xl",
    },
    {
      text: "S Y N T E C H",
      width: 220,
      top: 714,
      left: 162,
      className: "rotate-[0.12deg] opacity-10 text-2xl",
    },
    {
      text: "S Y N T E C H",
      width: 220,
      top: 701,
      left: 683,
      className: "rotate-[179.26deg] opacity-10 text-4xl",
    },
    {
      text: "S Y N T E C H",
      width: 220,
      top: 735,
      left: 390,
      className: "rotate-[179.26deg] opacity-10 text-4xl",
    },
    {
      text: "S Y N T E C H",
      width: 220,
      top: 371,
      left: 631,
      className: "rotate-[179.26deg] opacity-10 text-4xl",
    },
    {
      text: "S Y N T E C H",
      width: 220,
      top: 446,
      left: 104,
      className: "rotate-[-0.85deg] opacity-10 text-xl",
    },
    {
      text: "S Y N T E C H",
      width: 220,
      top: 424,
      left: 794,
      className: "rotate-[-0.85deg] opacity-10 text-xl",
    },
    {
      text: "S Y N T E C H",
      width: 220,
      top: 770,
      left: 564,
      className: "rotate-[-0.85deg] opacity-10 text-xl",
    },
    {
      text: "S Y N T E C H",
      width: 220,
      top: 658,
      left: 776,
      className: "rotate-[-0.85deg] opacity-10 text-xl",
    },
    {
      text: "S Y N T E C H",
      width: 220,
      top: 587,
      left: 221,
      className: "rotate-[0.12deg] opacity-10 text-4xl",
    },
    {
      text: "S Y N T E C H",
      width: 110,
      top: 595,
      left: -16,
      className: "rotate-[-90.23deg] opacity-10 text-base",
    },
    {
      text: "S Y N T E C H",
      width: 220,
      top: 468,
      left: 915,
      className: "rotate-[-90.23deg] opacity-10 text-4xl",
    },
    {
      text: "S Y N T E C H",
      width: 148,
      top: 629,
      left: 856,
      className: "rotate-[-90.12deg] opacity-10 text-xl",
    },
    {
      text: "S Y N T E C H",
      width: 148,
      top: 704,
      left: 969,
      className: "rotate-[-90.12deg] opacity-10 text-xl",
    },
    {
      text: "S Y N T E C H",
      width: 148,
      top: 537,
      left: 49,
      className: "rotate-[-90.12deg] opacity-10 text-xl",
    },
    {
      text: "S Y N T E C H",
      width: 148,
      top: 513,
      left: 89,
      className: "rotate-[-90.12deg] opacity-10 text-xl",
    },
    {
      text: "S Y N T E C H",
      width: 148,
      top: 595,
      left: 922,
      className: "rotate-[-90.12deg] opacity-10 text-xl",
    },
    {
      text: "S Y N T E C H",
      width: 148,
      top: 420,
      left: 922,
      className: "rotate-[-90.12deg] opacity-10 text-xl",
    },
    {
      text: "S Y N T E C H",
      width: 148,
      top: 740,
      left: 285,
      className: "rotate-[90.07deg] opacity-10 text-xl",
    },
  ];

  const mainElements = [
    { width: 452, height: 82, top: 375, left: 393, id: "aboutContainer" },
    { width: 743, top: 467, left: 166, id: "description" },
    { width: 374, top: 500, left: 171, id: "syn" },
    { width: 374, top: 500, left: 512, id: "tech" },
    { width: 374, top: 619, left: 171, id: "synergy" },
    { width: 201, top: 588, left: 406, id: "through" },
    { width: 374, top: 619, left: 512, id: "technology" },
  ];

  return (
    <>
      <div className={`relative w-full h-full ${className}`}>
        {backgroundTexts.map((item, index) => (
          <div
            key={index}
            className={`${item.className} absolute [font-family:'Poppins',Helvetica] font-bold text-white tracking-[0] leading-[normal]`}
            style={{
              width: `${item.width + adjustWidth}px`,
              top: `${item.top + adjustTop}px`,
              left: `${item.left + adjustLeft}px`,
            }}
          >
            {item.text}
          </div>
        ))}

        <div
          className="absolute opacity-50"
          style={{
            width: `${452 + adjustWidth}px`,
            height: `${82 + adjustWidth}px`,
            top: `${375 + adjustTop}px`,
            left: `${393 + adjustLeft}px`,
          }}
        >
          <div className="absolute w-[450px] top-0 left-0 [font-family:'Poppins',Helvetica] font-bold text-white text-[64px] tracking-[0] leading-[normal]">
            About us
          </div>
        </div>

        <div
          className="absolute [font-family:'Poppins',Helvetica] font-light text-white text-base text-center tracking-[0] leading-[normal]"
          style={{
            width: `${743 + adjustWidth}px`,
            top: `${467 + adjustTop}px`,
            left: `${166 + adjustLeft}px`,
          }}
        >
          SYNTECH UTP is an academic and technology-based student club that
          champions interdisciplinary innovation, technical skill development,
          and collaborative project execution.
        </div>

        <div
          className="absolute [font-family:'Poppins',Helvetica] font-bold text-white text-8xl text-center tracking-[0.2em] leading-[normal]"
          style={{
            width: `${374 + adjustWidth}px`,
            top: `${500 + adjustTop}px`,
            left: `${171 + adjustLeft}px`,
          }}
        >
          SYN
        </div>

        <div
          className="absolute [font-family:'Poppins',Helvetica] font-bold text-white text-8xl text-center tracking-[0.2em] leading-[normal]"
          style={{
            width: `${374 + adjustWidth}px`,
            top: `${500 + adjustTop}px`,
            left: `${512 + adjustLeft}px`,
          }}
        >
          TECH
        </div>

        <div
          className="absolute [font-family:'Poppins',Helvetica] font-normal text-white text-[32px] text-center tracking-[0] leading-[normal]"
          style={{
            width: `${374 + adjustWidth}px`,
            top: `${619 + adjustTop}px`,
            left: `${171 + adjustLeft}px`,
          }}
        >
          SYNERGY
        </div>

        <div
          className="absolute rotate-[89.25deg] [font-family:'Poppins',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[normal]"
          style={{
            width: `${201 + adjustWidth}px`,
            top: `${588 + adjustTop}px`,
            left: `${406 + adjustLeft}px`,
          }}
        >
          THROUGH
        </div>

        <div
          className="absolute [font-family:'Poppins',Helvetica] font-normal text-white text-[32px] text-center tracking-[0] leading-[normal]"
          style={{
            width: `${374 + adjustWidth}px`,
            top: `${619 + adjustTop}px`,
            left: `${512 + adjustLeft}px`,
          }}
        >
          TECHNOLOGY
        </div>
      </div>
    </>
  );
};

export default ScatteredSyntech;
