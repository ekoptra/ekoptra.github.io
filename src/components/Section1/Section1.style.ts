import { createStyles } from "@mantine/core";
import image from "../../images/bg1.webp";

type Props = {
  isHeadingAppear: boolean;
};

const useStyles = createStyles((theme, { isHeadingAppear }: Props) => ({
  wrapper: {
    minHeight: "150vh",
    overflowX: "clip",
  },
  transition: {
    transition: "all",
    transitionDuration: "2s",
  },
  container: {
    backgroundImage: `url(${image})`,
    height: "100vh",
    backgroundPosition: "0px -100px",
    backgroundSize: "cover",

    [theme.fn.smallerThan("lg")]: {
      backgroundPosition: "0px 0px",
    },

    [theme.fn.smallerThan("md")]: {
      backgroundPosition: "-50px 0px",
    },

    [theme.fn.smallerThan("md")]: {
      backgroundPosition: "-150px 0px",
    },

    [theme.fn.smallerThan("sm")]: {
      backgroundPosition: "-200px 0px",
    },

    [theme.fn.smallerThan("xs")]: {
      backgroundPosition: "-300px 0px",
    },
  },
  zoomIn: {
    transform: "scale(1.35)",

    [theme.fn.smallerThan("xl")]: {
      transform: "scale(1.4)",
    },
  },
  headingText: {
    fontSize: "60px",
    transitionDelay: isHeadingAppear ? "1s" : "0s",
    textShadow: "1px 1px #000000",

    [theme.fn.smallerThan("xl")]: {
      fontSize: "40px",
    },

    [theme.fn.smallerThan("lg")]: {
      fontSize: "35px",
    },

    [theme.fn.smallerThan("md")]: {
      fontSize: "25px",
    },
  },
  describeText: {
    fontSize: "25px",
    transitionDelay: isHeadingAppear ? "0s" : "1s",

    [theme.fn.smallerThan("xl")]: {
      fontSize: "16px",
    },

    [theme.fn.smallerThan("md")]: {
      fontSize: "12px",
    },
  },
}));

export default useStyles;
