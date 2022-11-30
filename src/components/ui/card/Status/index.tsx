import { FC } from "react";
import { Box, Tooltip } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";
import CircleIcon from '@mui/icons-material/FiberManualRecord';

import { StatusProps } from "./types";

const Status: FC<StatusProps> = (props) => {
  const { status, species, subSpecies } = props;  

  const StatusIconColor =
    status === "Alive" ? green[800] : status === "Dead" ? red[800] : grey[500];
 
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", fontSize: 11}}
    >
      <Tooltip title={status}>
        <CircleIcon sx={{ color: `${StatusIconColor}` }} />
      </Tooltip>
      <Box component="span">{`${status} - ${
        subSpecies.length ? subSpecies : species
      }`}</Box>
    </Box>
  );
};

export default Status;
