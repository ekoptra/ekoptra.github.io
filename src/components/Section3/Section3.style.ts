import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    background:
      "linear-gradient(180deg, rgba(42,48,40,1) 0%, rgba(42,48,40,0.5) 70%, rgba(240,240,240,1) 90%)",
    color: "white",
  },
  card: {
    backgroundColor: "#d9d9d9",
  },
}));

export default useStyles;
