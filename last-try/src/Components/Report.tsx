import React, { useState } from 'react';
import { ListItem, ListItemButton, ListItemText, Collapse, List, ListItemIcon } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArticleIcon from '@mui/icons-material/Article'
import VehicleReport from '../SubHeadersOfReports/VehicleReport'; 
import PassengerReport from '../SubHeadersOfReports/PassengerReport';
import DriverReport from '../SubHeadersOfReports/DriverReport';
import AccMalReport from '../SubHeadersOfReports/Accident-Malfunction';
import { Link } from 'react-router-dom';

const Report: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem disablePadding onClick={handleClick}>
        <ListItemButton>
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Report" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton component={Link} to="/vehicle-details" sx={{ pl: 2.3 }}>
            <ListItemIcon>
              <VehicleReport/> {/* Use the StarBorder icon for Vehicle Report */}
            </ListItemIcon>
            <ListItemText primary="Vehicle Details Report" />
          </ListItemButton>
        </List>

        <List component="div" disablePadding>
          <ListItemButton component={Link} to="/passenger-details" sx={{ pl: 2.3}}>
            <ListItemIcon>
              <PassengerReport/> {/* Use the StarBorder icon for Vehicle Report */}
            </ListItemIcon>
            <ListItemText primary="Passenger Details Report" />
          </ListItemButton>
        </List>

        <List component="div" disablePadding>
          <ListItemButton component={Link} to="/driver-details" sx={{ pl: 2.3}}>
            <ListItemIcon>
              <DriverReport/>
              {/* Use the StarBorder icon for Vehicle Report */}
            </ListItemIcon>
            <ListItemText primary="Driver Details Report" />
          </ListItemButton>
        </List>

        <List component="div" disablePadding>
          <ListItemButton component={Link} to="/accident-malfunction-details" sx={{ pl: 2.3}}>
            <ListItemIcon>
           <AccMalReport/>
           {/* Use the StarBorder icon for Vehicle Report */}
            </ListItemIcon>
            <ListItemText primary="Accident/Malfunction Report" />
          </ListItemButton>
        </List>



      </Collapse>
    </div>
  );
};

export default Report;
