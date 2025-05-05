import React from 'react';
import {
  WidgetsRounded,
  MapRounded,
  GroupsRounded,
  ArticleRounded,
  FolderRounded,
  PaymentRounded,
  CalendarMonthRounded,
  Settings
} from '@mui/icons-material';
import { Box, Avatar, Tooltip } from '@mui/material';

const Sidebar: React.FC = () => {
  const iconbar = [
    { icon: <WidgetsRounded />, label: 'Widgets' },
    { icon: <MapRounded />, label: 'Map' },
    { icon: <GroupsRounded />, label: 'Groups' },
    { icon: <ArticleRounded />, label: 'Articles' },
    { icon: <FolderRounded />, label: 'Folders' },
    { icon: <PaymentRounded />, label: 'Payments' },
    { icon: <CalendarMonthRounded />, label: 'Calendar' },
  ];

  return (
    <Box
      sx={{
        width: { xs: 60, sm: 80 },
        height: '95%',
        position: 'fixed',
        left: 0,
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: 5,
        display: 'flex',
        marginLeft: 2,
        flexDirection: 'column',
        alignItems: 'center',
        py: 2,
        
      }}
    >
      <Box>
        {iconbar.map((item, index) => (
          <Tooltip key={index} title={item.label} placement="right" arrow>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 4,
                p: 1,
                borderRadius: '50%',
                transition: 'all 300ms ease',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  transform: 'scale(1.1)',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                },
                '&:hover svg': {
                  color: 'primary.main',
                },
              }}
            >
              {item.icon}
            </Box>
          </Tooltip>
        ))}
      </Box>
      {/* bottom icons */}
      <Box
        sx={{
          border: '1px solid #ddd',
          borderRadius: 5,
          width: 50,
          height: 100,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          gap: 2,
          backgroundColor: '#eee',
          '&:hover svg': {
            color: 'primary.main',
          },
        }}>
        <Box>
        <Avatar alt="noouh" src="https://cdn.discordapp.com/attachments/1231156317507551324/1368816245930987643/WhatsApp_Image_2024-11-24_at_00.22.18_0cac0749.jpg?ex=681998f8&is=68184778&hm=3fe7422e4157699c14f4011978bff9bb63c8c97cc143c24b9c35bf65d9fa4ff5&"
        sx={{
          width: 30,
          height: 30,
          
        }}/>
        </Box>
        <Settings/>
      </Box>
    </Box>
  );
};

export default React.memo(Sidebar);
