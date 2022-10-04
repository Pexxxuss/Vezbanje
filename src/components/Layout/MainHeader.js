import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import { Box } from '@mui/system';

const MainHeader = () => {
  return (
    <AppBar
      sx={{
        backgroundImage:
          ' linear-gradient(90deg, rgba(180,58,58,1) 2%, rgba(49,49,116,1) 36%, rgba(105,0,161,1) 73%, rgba(166,69,252,1) 100%, rgba(203,4,205,1) 72%, rgba(0,212,255,1) 100%)',
      }}
    >
      <Toolbar>
        <Grid container sx={{ placeItems: 'center' }}>
          <Grid item xs={1}>
            <Typography>
              <InsightsRoundedIcon fontSize="large" />
            </Typography>
          </Grid>
          <Grid item xs={9} sx={{ margin: 'auto' }}>
            <Box
              display="flex"
              sx={{
                justifyContent: 'space-between',
              }}
            >
              <Button
                variant="contained"
                sx={{
                  color: 'white',
                  background: 'rgba(180,58,58,1)',
                  fontSize: '1.1rem',
                  textAlign: 'center',
                }}
                component={NavLink}
                to={{ pathname: '/today', query: { name: 'test' } }}
              >
                Todays Forecast
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: 'white',
                  background: 'rgba(180,58,58,1)',
                  marginLeft: 2,
                  fontSize: '1.1rem',
                  textAlign: 'center',
                }}
                component={NavLink}
                to={{ pathname: '/days', query: { name: 'test' } }}
              >
                Five Days Forecast
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: 'white',
                  background: 'rgba(180,58,58,1)',
                  marginRight: 9,
                  marginLeft: 1,
                  fontSize: '1.1rem',
                  textAlign: 'center',
                }}
                component={NavLink}
                to={{ pathname: '/polution', query: { name: 'test' } }}
              >
                Air Polution
              </Button>
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default MainHeader;
