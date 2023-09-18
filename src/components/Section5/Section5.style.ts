import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  line: {
    border: "2px solid #f39200",
    margin: "auto",
  },
  cardChart: {
    height: "500px",
    [theme.fn.smallerThan("xl")]: {
      height: "300px",
    },
  },
}));

export default useStyles;
