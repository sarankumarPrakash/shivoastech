import React, { useState, useEffect } from "react";

/*------------------------ MUI componets -------------------------*/
import {
  Paper,
  Box,
  InputBase,
  InputAdornment,
  IconButton,
  Tooltip,
  Stack,
} from "@mui/material";

/*------------------------ External  componets -------------------------*/
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

/*---------------------------MUI icons ------------------------*/
import TableViewIcon from '@mui/icons-material/TableView';
import ListIcon from "@mui/icons-material/List";

const SearchBar = ({ onSearch,onView }) => {
  const IconsRow = [
    { title: "Table  View", icon: <TableViewIcon />,value:'table' },
    { title: "List View", icon: <ListIcon />,value:'list' },
  ];

  const [searchInput, setSearchInput] = useState(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {onSearch(searchInput); }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchInput]);

  const handleClick=(data)=>{
    onView(data)
  }

  return (
    <div>
      <Box
        sx={{
          margin: "0 2% 0 2%",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            mr: 0,
            mb: 1,
            mt: 2,
            borderRadius: 0,
            width: "100%",
            height: "7.5vh",
          },
        }}
      >
        <Paper
          elevation={0}
          style={{
            width: "100%",
            borderRadius: "2px 2px 0px 0px",
            userSelect: "none",
          }}
          component="div"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "0.25%",
            }}
          >
            <div>
              <InputBase
                className="cus-search"
                placeholder="Search Like John, Tom, ..."
                variant="outlined"
                startAdornment={
                  <InputAdornment position="start" style={{ width: "40px" }}>
                    <IconButton>
                      <SearchOutlinedIcon style={{ color: "#9EA4AE" }} />
                    </IconButton>
                  </InputAdornment>
                }
                style={{
                  width: "300px",
                  height: "55px",
                  backgroundColor: "#F7F8F9",
                  borderRadius: "8px",
                  fontSize: "small",
                  marginLeft: "1vw",
                  marginTop: "0.5%",
                  borderColor: "transparent",
                }}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div style={{margin:"1%"}}>
              <Stack spacing={2} direction="row">
                {IconsRow?.map((data) => (
                  <Tooltip
                    key={data.title}
                    title={data.title}
                    userSelect="none"
                    followCursor
                    arrow
                  >
                    <IconButton
                      variant="text"
                      style={{
                        textTransform: "capitalize",
                        color: "#370c49",
                        padding: "0",
                        fontSize:'35px',
                        borderRadius: "20px 20px 20px 20px",
                      }}
                      sx={{
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                      onClick={(event) => handleClick(data.value, event)} 
                    >
                      {data.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Stack>
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default SearchBar;
