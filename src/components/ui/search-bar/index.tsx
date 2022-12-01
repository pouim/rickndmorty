import { FC } from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SearchBarProps } from "./types";

const SearchBar: FC<SearchBarProps> = (props) => {
  const { onChange } = props;
  return (
    <Box
      sx={{
        border: "1px solid grey",
        borderRadius: 2,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <Box display="flex" alignContent="center" px={1} py={0.5}>
        <SearchIcon sx={{ color: "grey", marginTop: ".2rem" }} />
        <InputBase
          onChange={onChange}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          sx={{ marginLeft: "1rem" }}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
