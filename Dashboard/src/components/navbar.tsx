import React from 'react'
import { Box, Typography, Breadcrumbs, Link, IconButton,  } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Navbar() {

  return (
    <>
{/* Navbar */}
      <Box
        p={3}
        sx={{
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 1,
          px: 3,
          py: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Team List
          </Typography>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="medium" />}
            aria-label="breadcrumb"
            sx={{ mt: 1 }}
          >
            <Link underline="hover" color="blue" href="#">
              Admin Dashboard
            </Link>
            <Typography sx={{ color: 'text.primary' }}>Team List</Typography>
          </Breadcrumbs>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <IconButton>
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <MailIcon />
          </IconButton>
        </Box>
      </Box>
      {/* end Navbar */}

    </>
    
  );
}

export default React.memo(Navbar);
