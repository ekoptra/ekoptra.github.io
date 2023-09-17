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
  map: {
    height: "400px",
  },
  textDescription: {
    fontSize: "14px",
    textAlign: "right",
  },
  line: {
    border: "2px solid #D2D461",
    margin: "auto",
  },
}));

export default useStyles;
