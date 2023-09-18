import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  image: {
    height: "600px",

    [theme.fn.smallerThan("xl")]: {
      height: "450px",
    },
  },
}));

export default useStyles;
