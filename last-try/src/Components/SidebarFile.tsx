//SidebarFile.tsx
import React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Dashboard from './Dashboard';
import Driver from './Drivers';
import { Link } from 'react-router-dom';
import Trips from './Trips';
import Passenger from './Passenger';
import Vehicle from './Vehicle';
import Report from './Report';
import Setting from './Setting';

interface SidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, handleDrawerClose }) => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <div>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      
      <Divider />
      <List>
        {/* Dashboard */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <Dashboard /> 
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        {/* Drivers */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/drivers">
            <ListItemIcon>
              <Driver/>
            </ListItemIcon>
            <ListItemText primary="Drivers" />
          </ListItemButton>
        </ListItem>

        {/* Trips */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/trips">
            <ListItemIcon>
              <Trips/>
            </ListItemIcon>
            <ListItemText primary="Trips" />
          </ListItemButton>
        </ListItem>

        {/* Passenger */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/passenger">
            <ListItemIcon>
              <Passenger/>
            </ListItemIcon>
            <ListItemText primary="Passenger" />
          </ListItemButton>
        </ListItem>

        {/* Vehicle */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/vehicle">
            <ListItemIcon>
              <Vehicle/>
            </ListItemIcon>
            <ListItemText primary="Vehicle" />
          </ListItemButton>
        </ListItem>
        
        {/* Report */}
        <Report />
        
        {/* Setting */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/setting">
            <ListItemIcon>
              <Setting/>
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
