import { Box } from "theme-ui";

type SpacerProps = {
  space?: number;
  axis?: "vertical" | "horizontal";
};

const Spacer: React.FC<SpacerProps> = ({ space = 3, axis = "vertical" }) => (
  <Box
    sx={{
      height:
        axis === "vertical" ? (theme) => theme.space[space] + "px" : "100%",
      width:
        axis === "horizontal" ? (theme) => theme.space[space] + "px" : "100%",
      flexShrink: 0,
    }}
  />
);

export default Spacer;
