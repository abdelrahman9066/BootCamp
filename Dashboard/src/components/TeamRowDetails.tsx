import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import {Props} from '../types/teamTypes';



const TeamRowDetails: React.FC<Props> = ({ member }) => (
  <Box sx={{ p: 2, bgcolor: '#f9f9f9', borderTop: '1px solid #ddd' }}>
    <Stack direction="row"  justifyContent='space-between' alignItems="center" spacing={2}>
      {/* Office Location */}
      <Box>
        <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOnIcon fontSize="small" /> Office Location
        </Typography>
        <Typography variant="body2">{member.location}</Typography>
      </Box>

      {/* Team Mates */}
      <Box>
        <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PersonIcon fontSize="small" /> Team Mates
        </Typography>
          <Typography  variant="body2">
          </Typography>
      </Box>

      {/* Birthday */}
      <Box>
        <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CakeIcon fontSize="small" /> Birthday
        </Typography>
        <Typography variant="body2">{member.birthday}</Typography>
      </Box>

      {/* HR Year */}
      <Box>
        <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CalendarTodayIcon fontSize="small" /> HR Year
        </Typography>
        <Typography variant="body2">{member.hrYears} Years</Typography>
      </Box>

      {/* Address */}
      <Box>
        <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <HomeIcon fontSize="small" /> Address
        </Typography>
        <Typography variant="body2">{member.address}</Typography>
      </Box>
    </Stack>
  </Box>
);

export default TeamRowDetails;