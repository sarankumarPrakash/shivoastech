import React from "react";
import { Divider, List, ListItem, ListItemText,Paper,Card,CardContent,Typography } from "@mui/material";

const ListComponent = ({ responseTableData }) => {
  return (
    <div tyle={{width:'100%'}}>
         <Paper elevation={3} sx={{margin: "0 2% 0 2%"}}>
      <List>
        
        {responseTableData?.length>0 ? responseTableData?.map((item, index) => (
          <>
          <ListItem key={index}>
            <ListItemText 
              primary={`Name: ${item.name}`}
              secondary={`Count: ${item.count}`}
              primaryTypographyProps={{ sx: { width: '200px' } }} 
              secondaryTypographyProps={{ sx: { width: '200px' } }} 
              sx={{ marginRight: '15%' }}
            />
           
              {item.country.map((country, countryIndex) => (
                <ListItem key={countryIndex}>
                  <ListItemText
                    primary={`Country: ${country.country_id}`}
                    secondary={`Probability: ${country.probability}`}
                  />
                </ListItem>
              ))}
          
          </ListItem>   {index < responseTableData?.length - 1 && <Divider />}  </> 
        )):(<div style={{padding:'2% 0 2% 0'}}>
        
            <Typography
              component="div"
              style={{ display: "flex", justifyContent: "center", fontSize:"18px" }}
            >
              Search Name to see the Probability with Country Code!
            </Typography>
         
      </div>)}
      </List>
      </Paper>
    </div>
  );
};

export default ListComponent;
