'use client';
import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Box
      sx={{
        backgroundColor: '#333333',
        color: '#FFF',
        padding: '2rem 1rem',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Business Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFA500' }}>
            {language === "en" ? "Khamir Ydoh Cafeteria" : "كافتيريا خمير يده"}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: '#FFF' }}>
            {language === "en"
              ? "Experience the best flavors and culinary delights in town!"
              : "استمتع بأفضل النكهات والمأكولات الشهية في المدينة!"}
          </Typography>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFA500' }}>
            {language === "en" ? "Contact Us" : "تواصل معنا"}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {language === "en" ? "Phone: (123) 456-7890" : "هاتف: (123) 456-7890"}
          </Typography>
          <Typography variant="body2">
            {language === "en" ? "Email: info@khamirydoh.com" : "البريد الإلكتروني: info@khamirydoh.com"}
          </Typography>
          <Typography variant="body2">
            {language === "en" ? "Address: 123 Cafe Street, Foodville" : "العنوان: شارع الكافيه 123، مدينة الطعام"}
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFA500' }}>
            {language === "en" ? "Quick Links" : "روابط سريعة"}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
            <Link href="/" passHref>
              <Typography variant="body2" sx={{ color: '#FFF', cursor: 'pointer' }}>
                {language === "en" ? "Home" : "الرئيسية"}
              </Typography>
            </Link>
            <Link href="/menu" passHref>
              <Typography variant="body2" sx={{ color: '#FFF', cursor: 'pointer' }}>
                {language === "en" ? "Menu" : "قائمة الطعام"}
              </Typography>
            </Link>
            <Link href="/reservations" passHref>
              <Typography variant="body2" sx={{ color: '#FFF', cursor: 'pointer' }}>
                {language === "en" ? "Reservations" : "الحجوزات"}
              </Typography>
            </Link>
            <Link href="/contact" passHref>
              <Typography variant="body2" sx={{ color: '#FFF', cursor: 'pointer' }}>
                {language === "en" ? "Contact" : "تواصل"}
              </Typography>
            </Link>
          </Box>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFA500' }}>
            {language === "en" ? "Follow Us" : "تابعنا"}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{ color: '#FFA500' }}
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              sx={{ color: '#FFA500' }}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              sx={{ color: '#FFA500' }}
              aria-label="Twitter"
            >
              <TwitterIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom Text */}
      <Typography variant="body2" sx={{ mt: 4, color: '#FFF' }}>
        {language === "en"
          ? "© 2024 Khamir Ydoh Cafeteria. All Rights Reserved."
          : "© 2024 كافتيريا خمير يده. جميع الحقوق محفوظة."}
      </Typography>
    </Box>
  );
};

export default Footer;
