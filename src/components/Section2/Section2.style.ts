import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: "#2A3028",
    color: "white",
  },
  header: {
    fontSize: "36px",
    paddingBottom: "20px",
    borderBottom: "5px solid #e8dc29",

    [theme.fn.smallerThan("xl")]: {
      fontSize: "30px",
    },

    [theme.fn.smallerThan("md")]: {
      fontSize: "25px",
    },
  },
}));

export default useStyles;
