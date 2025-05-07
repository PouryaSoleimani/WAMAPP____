import { BiLeftArrowAlt } from "react-icons/bi"; 
import { BiLogOut, BiSearch } from "react-icons/bi"; 
import { BiUser } from "react-icons/bi"; 
import { BiHome } from "react-icons/bi"; 
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from "react-router";

export default function BottomNavBarComponent() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const backHandler = () => {navigate(-1);};
  return (
    <Box sx={{ pb: 0 , margin:"2px 0 0 0" }} ref={ref}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0  }} elevation={3}>
        <BottomNavigation
          sx={{ width: '100%' , display: 'flex' , justifyContent: 'center' , alignItems: 'center', backgroundColor: "var(--main)", color: "var(--text-primary)"  }}
          showLabels
          value={value}
          onChange={(_event: React.SyntheticEvent<Element, Event>, newValue) => { setValue(newValue); }}
        >
          <BottomNavigationAction icon={<BiLogOut className="w-6 h-6 text-[var(--text-primary)]" />} />
          <BottomNavigationAction  icon={<BiUser className="w-6 h-6 text-[var(--text-primary)]"/>} />
          <BottomNavigationAction icon={<BiSearch  className="w-6 h-6 text-[var(--text-primary)]" />} />
          <BottomNavigationAction  icon={<BiLeftArrowAlt onClick={() => { backHandler() }} className="w-6 h-6 text-[var(--text-primary)]"/>} />
          <BottomNavigationAction component={Link} to="/"  icon={<BiHome className="w-6 h-6 text-[var(--text-primary)]" />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}




