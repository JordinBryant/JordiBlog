import "typeface-lora";
import "typeface-gloria-hallelujah";
import "typeface-instrument-serif";

import { createTheme } from "@mui/system";

const theme = createTheme({
  typography: {
    fontFamily: ["Lora", "serif"].join(","),
  },
});

export default theme;
