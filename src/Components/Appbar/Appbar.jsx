import { Box, Stack } from "@mui/material";
import React from "react";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
function Appbar() {
  return (
    <Box
      sx={{
        height: "90.8vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#333333",
        width: "40px",
        alignItems: "center",
      }}
    >
      <Stack spacing={2} direction="column">
        <Box>
          <FileCopyOutlinedIcon sx={{ color: "#fff" }} />
        </Box>
        <Box>
          <FileCopyOutlinedIcon sx={{ color: "#fff" }} />
        </Box>
        <Box>
          <FileCopyOutlinedIcon sx={{ color: "#fff" }} />
        </Box>
        <Box>
          <FileCopyOutlinedIcon sx={{ color: "#fff" }} />
        </Box>
      </Stack>
      <Stack direction="column" spacing={2}>
        <Box>
          <FileCopyOutlinedIcon sx={{ color: "#fff" }} />
        </Box>
        <Box>
          <FileCopyOutlinedIcon sx={{ color: "#fff" }} />
        </Box>
      </Stack>
    </Box>
  );
}

export default Appbar;
