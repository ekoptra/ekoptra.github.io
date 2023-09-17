import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: "#F0F0F0",
    color: "#2A3028",
  },
  line: {
    border: "2px solid #f39200",
    margin: "auto",
  },
  header: {
    fontSize: "32px",

    [theme.fn.smallerThan("xl")]: {
      fontSize: "25px",
    },

    [theme.fn.smallerThan("md")]: {
      fontSize: "25px",
    },
  },
  cardChart: {
    borderRadius: "30px",
    border: "0.1em solid #2A3028",
  },
  heightChart: {
    height: "500px",

    [theme.fn.smallerThan("xl")]: {
      height: "300px",
    },
  },
}));

export default useStyles;
