import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: "#F0F0F0",
    color: "#2A3028",
  },
  header: {
    fontSize: "36px",
    paddingBottom: "20px",
    borderBottom: "5px solid #2A3028",

    [theme.fn.smallerThan("xl")]: {
      fontSize: "30px",
    },

    [theme.fn.smallerThan("md")]: {
      fontSize: "25px",
    },
  },
  map: {
    height: "300px",
  },
}));

export default useStyles;
