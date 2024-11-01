import React from 'react';
import { Box, Typography } from '@mui/material';

const Logo: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {/* English Logo Text */}
      <Box display="flex" alignItems="center" gap={0.5}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#FFA500', // Bright orange color
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '2px',
          }}
        >
          Khamir Ydoh
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#FFD700', // Bright yellow color
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '2px',
          }}
        >
          Cafeteria
        </Typography>
      </Box>

      {/* Arabic Logo Text */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          color: '#FFA500', // Bright orange color
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '1px',
          marginTop: '2px', // Small space between English and Arabic text
        }}
      >
        كافتيريا خمير يده
      </Typography>
    </Box>
  );
};

export default Logo;
