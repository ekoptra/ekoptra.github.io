import React from "react";
import useStyles from "./Section2.style";
const Section2: React.FC = () => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.wrapper)}>
      <div className="py-60 lg:px-28 md:px-20 sm:px-16 px-8">
        <div className={cx(classes.header, "lg:w-1/3 sm:w-2/3 w-5/6")}>
          <h2 className="leading-tight">
            <span className="font-semibold text-yellow">Krisis Pangan </span>
            yang Melekat di Papua
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section2;
