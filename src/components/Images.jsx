import React from "react";
import miami from "../assets/images/miami.jpg";
import pretoria from "../assets/images/pretoria.jpg";
import rio from "../assets/images/rio.jpg";

const Images = () => {
  const images = [miami, pretoria, rio];
  const [pages, setPages] = React.useState(1);

  let paginations = [];
  const myimage = images[pages - 1];
  for (let index = 0; index < images.length; index++) {
    paginations = [...paginations, index + 1];
  }

  React.useEffect(() => {
    if (pages >= 4) {
      setPages(1);
    }
    const interval = window.setInterval(() => {
      setPages(pages + 1);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [pages]);

  return (
    <div
      className="w-full h-[250px] mt-2 rounded-lg flex justify-center flex-col items-center md:h-[350px] myanimation pt-10"
      style={{
        backgroundImage: `url(${myimage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h2
        className="text-white uppercase text-[20px] font-bold text-center -mt-6 md:text-3xl"
        style={{ textShadow: "2px 2px 2px #000" }}
      >
        travel to explore
      </h2>
      <p
        className="text-white text-center text-sm mt-3"
        style={{ textShadow: "2px 2px 2px #000" }}
      >
        Loren Ipsum Dolor Sit Amet Consectetur
        <br />
        Adipscing Elit, Sed Do Eiusmond Tempor Incididunt <br />
        Ut Labore Et Dolore Magna Ultricies Mi Eget
      </p>
      <div className="w-6 h-6 bg-red-600 rounded-full text-center text-white m-2">
        1
      </div>
      <div className="flex mt-1">
        {paginations.map((pagination, index) => (
          <div
            className={`w-4 h-4 rounded-full bg-white ${
              index + 1 === pages ? "bg-opacity-80" : "bg-opacity-40"
            } m-2`}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Images;
