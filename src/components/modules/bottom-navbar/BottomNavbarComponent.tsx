import { BiLogOut, BiSearch } from "react-icons/bi"; 
import { BiUser } from "react-icons/bi"; 
import { BiStar } from "react-icons/bi"; 
import { BiHome } from "react-icons/bi"; 
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

export default function BottomNavBarComponent() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);


  return (
    <Box sx={{ pb: 7 }} ref={ref} flexDirection="row-reverse">
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event: React.SyntheticEvent<Element, Event>, newValue) => { setValue(newValue); }}
        >
          <BottomNavigationAction icon={<BiLogOut className="w-6 h-6" />} />
          <BottomNavigationAction  icon={<BiUser className="w-6 h-6"/>} />
          <BottomNavigationAction  icon={<BiStar className="w-6 h-6"/>} />
          <BottomNavigationAction icon={<BiSearch  className="w-6 h-6" />} />
          <BottomNavigationAction  icon={<BiHome className="w-6 h-6"/>} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}




