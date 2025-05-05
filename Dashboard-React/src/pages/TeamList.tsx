import React from 'react';
import { Box } from '@mui/material';
import TeamTable from '../components/TeamTable';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/navbar';
const TeamList: React.FC = () => (
  < >
   <Box 
    
   sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '100px 1fr' },
        overflow: 'hidden',
        bgcolor: '#f0f0f0',
        mt: 0,
          }}>

        <Box
          sx={{display: { xs: 'none', md: 'block' }, }}>
          <Sidebar />
        </Box>

        <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              overflow: 'auto',
              width: '100%', 
              }}>
        <Box sx={{ padding: 1 }}>
              <Navbar />
        </Box>
                    
        <Box sx={{ bgcolor:'white',borderRadius:2,width:'95%',marginX:'auto',my:2,p:2,boxShadow: 1,}}>
        <TeamTable />
        </Box>
        </Box>

    
  </Box>
  </>
);

export default TeamList;
