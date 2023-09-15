import image from "./images/bg1.webp";
import React from "react";

function App() {
  const [isScale, setIsScale] = React.useState(false);

  const handleScroll = () => {
    setIsScale((prev) => window.scrollY > 50);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main relative">
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "100vh",
          backgroundPosition: "0px -100px",
        }}
        className={`w-full fixed bg-first-position transition-all duration-2s ${
          isScale ? "scale-effect" : ""
        }`}
      >
        <div className="flex w-100 h-full items-center justify-center bg-black bg-opacity-50">
          <h1 className="main-title text-center font-bold text-white w-3/5 transition-all duration-2s">
            Sampai kapan Kawasan Timur Indonesia berada dalam wilayah rawan
            pangan?
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
