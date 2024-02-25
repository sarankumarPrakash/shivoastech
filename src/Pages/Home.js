import React, { useState } from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchBar from "../Components/SearchBar";

import ListComponent from "../Components/ListComponent";
import CardView from "../Components/CardView";
import { getDetailApi } from "../WebApi/index";

const Home = () => {
  const [displayView, Setview] = useState("table");
  const [responseTableData,setResponseData]=useState([])

  const handleSearch = async (val) => {
    try{
       const responseData=await getDetailApi(val)
        let filterValue=responseData?.filter(data=> data.name !=="")
        setResponseData(filterValue)
    }
    catch(err){
        console.error(err.message)
    } 
  };
  const handleView = (val) => {
    Setview(val);
  };

  return (
    <div>
      <div>
        <Box style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Paper
            elevation={0}
            style={{
              margin: "2% 2% 0 2%",
              width: "100%",
              borderRadius: "2px 2px 0px 0px",
              userSelect: "none",
              height: "5vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid
              container
              spacing={3}
              justifyContent="space-between"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Grid
                item
                xs={4}
                style={{ display: "flex", alignItems: "center" }}
              >
                <ArrowBackIcon
                  style={{
                    marginRight: "10px",
                    marginLeft: "5px",
                    cursor: "pointer",
                  }}
                />

                <Typography
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "16px",
                    userSelect: "none",
                    fontWeight: "700",
                  }}
                >
                  Probability score to countries
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </div>
      <SearchBar
        onSearch={(val) => handleSearch(val)}
        onView={(val) => handleView(val)}
      />
      {displayView === "table" ? (
        <ListComponent responseTableData={responseTableData} />
      ) : (
        <CardView responseTableData={responseTableData} />
      )}
    </div>
  );
};

export default Home;
