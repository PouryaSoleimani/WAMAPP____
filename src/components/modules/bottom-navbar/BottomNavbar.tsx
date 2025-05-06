import { BiLogOut } from "react-icons/bi"; 
import { BiUser } from "react-icons/bi"; 
import { BiStar } from "react-icons/bi"; 
import { BiHome } from "react-icons/bi"; 
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);


  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<BiHome />} />
          <BottomNavigationAction label="Favorites" icon={<BiStar />} />
          <BottomNavigationAction label="Archive" icon={<BiUser />} />
          <BottomNavigationAction label="Archive" icon={<BiLogOut />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}




