import { Box } from "@mui/system";
import { PropsWithChildren } from "react";

type TextVariant = "h1" | "h2" | "h3" | "body";

interface TextProps extends PropsWithChildren {
  variant?: TextVariant;
}

const Text: React.FC<TextProps> = ({ variant = "body", children }) => {
  return <Box sx={{ typography: variant }}>{children}</Box>;
};

export default Text;
