import { createStyles } from "@mantine/core";

type Props = {
  colorScheme?: "Dark" | "Light";
};

const useCommonStyle = createStyles((theme, { colorScheme }: Props) => {
  return {
    wrapper: {
      backgroundColor: colorScheme === "Light" ? "#F0F0F0" : "#2A3028",
      color: colorScheme === "Light" ? "#2A3028" : "white",
    },
    header: {
      borderBottom: "5px solid #e8dc29",
    },
  };
});

export default useCommonStyle;
