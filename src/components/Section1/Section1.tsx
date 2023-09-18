import React from "react";
import useStyles from "./Section1.style";

const Section1: React.FC = () => {
  const [isHeadingAppear, setIsHeadingAppear] = React.useState(true);

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

  const { classes, cx } = useStyles({ isHeadingAppear });

  return (
    <div className={cx(classes.wrapper, "sticky top-0 -z-10")}>
      <div
        className={cx(classes.container, classes.transition, {
          [classes.zoomIn]: !isHeadingAppear,
        })}
      >
        <div className="flex w-100 h-full items-center justify-center bg-black bg-opacity-60 relative">
          <h1
            className={cx(
              classes.transition,
              "text-center font-semibold text-white md:w-3/5  absolute ",
              classes.headingText,
              { ["opacity-0"]: !isHeadingAppear }
            )}
          >
            Kerawanan Pangan yang melanda Sang Permata Timur Indonesia, Pulau
            Papua
          </h1>

          <div
            className={cx(
              classes.transition,
              "text-center font-normal text-white w-3/5 absolute",
              classes.describeText,
              { ["opacity-0"]: isHeadingAppear }
            )}
          >
            <p className="mb-3">
              Di antara gemerlap lautan dan hijaunya pegunungan, terdapat
              realita yang terkadang terlupakan.
            </p>
            <p>
              Di Timur Indonesia, di balik panorama alam yang memukau, ada
              realitas yang menghantui:{" "}
              <b>ketahanan pangan yang tak kunjung membaik.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
