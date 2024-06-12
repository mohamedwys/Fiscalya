"use client";

import { Box, useTheme } from "@mui/material";
import GeographyChart from "@/components/GeographyChart";
import { tokens } from "@/lib/theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    
      

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart width="100%" />
      </Box>
    
  );
};

export default Geography;