// File: pages/404.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h1" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" gutterBottom>
        Oops! The page you're looking for does not exist.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Go back to Home
        </Button>
      </Link>
    </Box>
  );
};

export default Custom404;
