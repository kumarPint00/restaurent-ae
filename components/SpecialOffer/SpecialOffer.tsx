'use client';
import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';

const SpecialOffer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Box
      sx={{
        padding: '4rem 0',
        backgroundColor: '#fdf5e6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          maxWidth: 900,
          boxShadow: 3,
          overflow: 'hidden',
        }}
      >
        {/* Offer Image */}
        <CardMedia
          component="img"
          image="/images/offer.webp"  // Add your offer image here
          alt={language === "en" ? "Special Offer" : "عرض خاص"}
          sx={{ width: { xs: '100%', md: '50%' }, height: '100%' }}
        />

        {/* Offer Details */}
        <CardContent sx={{ padding: 4, backgroundColor: '#333333', color: '#FFF' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FFA500' }}>
            {language === "en" ? "Limited Time Offer!" : "عرض لفترة محدودة!"}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {language === "en"
              ? "Enjoy our exclusive gourmet coffee paired with a slice of rich chocolate cake at a 20% discount. Perfect for an afternoon treat!"
              : "استمتع بقهوة جورميه الحصرية مع شريحة من كعكة الشوكولاتة الغنية بخصم 20٪. مثالية لتناول وجبة خفيفة بعد الظهر!"}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, color: '#FFD700' }}>
            {language === "en" ? "Valid until: December 31, 2024" : "صالح حتى: 31 ديسمبر 2024"}
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: '#FFA500',
              color: '#333333',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#FF8C00',
              },
            }}
          >
            {language === "en" ? "Redeem Now" : "احصل عليه الآن"}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SpecialOffer;
