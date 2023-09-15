import React from "react";
import useStyles from "./Section1.style";

const Section1: React.FC = () => {
  const [isHeadingAppear, setIsHeadingAppear] = React.useState(true);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsHeadingAppear((prev) => scrollPosition < 50);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.wrapper)} ref={wrapperRef}>
      <div
        className={cx(
          classes.container,
          classes.transition,
          "w-full sticky top-0",
          {
            [classes.zoomIn]: !isHeadingAppear,
          }
        )}
      >
        <div className="flex w-100 h-full items-center justify-center bg-black bg-opacity-60 relative">
          <h1
            className={cx(
              classes.transition,
              "text-center font-semibold text-white md:w-3/5  absolute",
              classes.headingText,
              { ["opacity-0"]: !isHeadingAppear }
            )}
          >
            Sampai kapan Kawasan Timur Indonesia berada dalam wilayah rawan
            pangan?
          </h1>

          <h2
            className={cx(
              classes.transition,
              "text-center font-semibold text-white w-3/5 absolute",
              classes.describeText,
              { ["opacity-0"]: isHeadingAppear }
            )}
          >
            Di antara gemerlap lautan dan hijaunya pegunungan, terdapat realita
            yang terkadang terlupakan. Di Timur Indonesia, di balik panorama
            alam yang memukau, ada realitas yang menghantui:{" "}
            <b>ketahanan pangan yang tak kunjung membaik.</b>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section1;
