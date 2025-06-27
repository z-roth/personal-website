import { Box } from "theme-ui";

type SpacerProps = {
  height?: number | number[];
  width?: number | number[];
};

const Spacer: React.FC<SpacerProps> = ({ height = 0, width = 0 }) => (
  <Box
    sx={{
      mt: height,
      mr: width,
      display: "inline-block",
    }}
  />
);

export default Spacer;
