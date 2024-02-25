import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


const ResponseCardView = ({ responseTableData }) => {
  return (
    <div style={{display:'flex',margin: "0 2% 0 2%"}}>
      {responseTableData?.length>0 ?responseTableData?.map((item, index) => (
        <Card key={index} style={{ width: 300, margin: 10 }}>
          <CardContent>
            <Typography variant="h5" component="div">
             
                Name : <span style={{textTransform:'capitalize'}}>{item.name}</span>
             
             </Typography>
            <Typography color="text.secondary" >
              Count: {item.count}
            </Typography>
            <Typography >
              Countries:
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {item.country.map((countryItem, countryIndex) => (
                <li key={countryIndex} style={{ marginBottom: '8px' }}>
                  {countryItem.country_id} - Probability: {countryItem.probability}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )):(<div style={{width:'100%'}}>
        <Card sx={{ minWidth: 275 ,padding:'1.5% 0 1.5% 0 '}}>
          <CardContent>
            <Typography
              component="div"
              style={{ display: "flex", justifyContent: "center", width:'100%',fontSize:"18px" }}
            >
              Search Name to see the Probability with Country Code!
            </Typography>
          </CardContent>
        </Card>
      </div>)}
    </div>
  );
};

export default ResponseCardView;
