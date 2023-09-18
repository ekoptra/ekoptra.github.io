import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  map: {
    height: "500px",

    [theme.fn.smallerThan("xl")]: {
      height: "400px",
    },
  },
}));

export default useStyles;
