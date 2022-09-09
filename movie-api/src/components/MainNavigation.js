import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {makeStyles} from '@mui/styles';




const useStyles = makeStyles({
    root: {
        width: "100%",
        margin: "auto",
        position : 'fixed',
        bottom : 0,
        backgroundColor : "#2d313a",
        zIndex : 100,
    }
})

export default function MainNavigation() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
        <BottomNavigationAction label="Trending" icon={<TrendingUpIcon />} />
        <BottomNavigationAction label="Movies" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="TV Series" icon={<LocalMoviesIcon />} />
        <BottomNavigationAction label="Search" icon={<ManageSearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
